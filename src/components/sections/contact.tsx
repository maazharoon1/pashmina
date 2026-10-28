import { Mail } from "lucide-react";
import { site } from "@/config/site";

export function ContactSection() {
  const methods = [
    { name: "Email", className: "mail", href: site.contact.email ? `mailto:${site.contact.email}` : "", icon: <Mail size={26} /> },
    { name: "LinkedIn", className: "linkedin", href: site.contact.linkedin, icon: <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M6.5 8.2H3.2V20h3.3V8.2ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM20.8 13.25c0-3.55-1.9-5.2-4.45-5.2-2.05 0-2.97 1.13-3.48 1.92V8.2H9.57V20h3.3v-5.84c0-1.54.29-3.03 2.2-3.03 1.88 0 1.9 1.76 1.9 3.13V20h3.3l.01-6.75Z" /></svg> },
    { name: "Upwork", className: "upwork", href: site.contact.upwork, icon: <span className="upwork-wordmark" aria-hidden="true">up</span> },
  ];
  return <section className="section" id="contact">
    <div className="container">
      <div className="contact-card glass glow">
        <p className="eyebrow">— Contact</p>
        <h2 className="heading">Have a project?<br /><span>Let&apos;s build it right.</span></h2>
        <p className="muted" style={{ maxWidth: 620, margin: "22px auto 0" }}>
          Tell me what you need—short-form videos, AI UGC, talking-head content, long-form editing or brand videos. Let&apos;s discuss your brief and bring your ideas to life.
        </p>
        <div className="contact-actions icon-actions">
          {methods.map(method => <div className="contact-method" key={method.name}>
            {method.href ? <a className={`icon-btn ${method.className}`} href={method.href}
              target={method.name === "Email" ? undefined : "_blank"} rel={method.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={method.name === "Email" ? `Email ${site.name}` : `Visit ${site.name}'s ${method.name} profile`} title={method.name}>
              {method.icon}
            </a> : <button className={`icon-btn contact-placeholder ${method.className}`} type="button" disabled
              aria-label={`${method.name} — coming soon`} title={`${method.name} link coming soon`}>
              {method.icon}
            </button>}
            <span className="contact-method-label">{method.name}</span>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
