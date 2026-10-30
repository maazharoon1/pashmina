import nodemailer from "nodemailer";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; until: number }>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Next's internal URL can use 0.0.0.0 while the browser uses localhost
  // or a LAN hostname. Compare with the incoming Host instead.
  if (origin) {
    let allowed = false;
    try {
      const source = new URL(origin);
      const host = request.headers.get("host") || new URL(request.url).host;
      allowed = ["http:", "https:"].includes(source.protocol) && source.host.toLowerCase() === host.toLowerCase();
    } catch { /* Malformed origins are rejected. */ }
    if (!allowed) return Response.json({ error: "Please refresh the page and try again." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error: "Expected JSON" }, { status: 415 });
  let data;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return Response.json({ error: "Request too large" }, { status: 413 });
    data = JSON.parse(raw);
  } catch { return Response.json({ error: "Invalid request" }, { status: 400 }); }
  if (!data || typeof data !== "object") return Response.json({ error: "Invalid request" }, { status: 400 });
  if (data.website) return Response.json({ ok: true });
  const { question, details, email } = data;
  if ([question, details].some(value => typeof value !== "string" || !value.trim() || value.length > 2000) || typeof email !== "string" || email.length > 254 || !emailPattern.test(email) || /[\r\n]/.test(email)) {
    return Response.json({ error: "Please provide your question, project details and a valid email." }, { status: 400 });
  }
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const to = process.env.CONTACT_TO_EMAIL?.trim() || user;
  if (!user || !pass || !to) return Response.json({ error: "Email delivery is not configured." }, { status: 503 });
  // Best-effort per-instance protection; use a shared rate limiter for multi-instance deployments.
  const now = Date.now();
  for (const [address, entry] of attempts) if (entry.until < now) attempts.delete(address);
  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const entry = attempts.get(address) || { count: 0, until: now + 600000 };
  if (entry.count >= 5) return Response.json({ error: "Please try again later." }, { status: 429 });
  entry.count++;
  attempts.set(address, entry);
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
    const result = await transport.sendMail({
      from: { name: "Pashmina Portfolio", address: user },
      to,
      replyTo: email.trim(),
      subject: "New portfolio enquiry",
      text: `Question:\n${question.trim()}\n\nProject and timeline:\n${details.trim()}\n\nReply to:\n${email.trim()}`,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
    if (!result.accepted.length) return Response.json({ error: "Email delivery failed. Please try again." }, { status: 502 });
    return Response.json({ ok: true });
  } catch { return Response.json({ error: "Email delivery failed. Please try again." }, { status: 502 }); }
}
