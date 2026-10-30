"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronLeft, Send, X } from "lucide-react";
import { site } from "@/config/site";

const questions = ["Any question? Tell me what you have in mind.", "What type of video do you need, and when do you need it?", "What's your email? Pashmina will reply to you there."];

export function EnquiryChat() {
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const busy = useRef(false);
  const input = useRef<HTMLInputElement>(null);
  const conversation = useRef<HTMLDivElement>(null);
  const step = answers.length;

  useEffect(() => {
    if (conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight;
    if (open) input.current?.focus({ preventScroll: true });
  }, [open, step, status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || !value.trim()) return;
    setError("");
    if (step < 2) {
      setAnswers([...answers, value.trim()]);
      setValue("");
      input.current?.focus();
      return;
    }
    busy.current = true;
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: answers[0], details: answers[1], email: value.trim(), website: form.get("website") }),
      });
      if (!response.ok) throw new Error(response.status === 429 ? "Too many attempts. Please try again in a few minutes." : "Your enquiry couldn't be sent. Please try again, or use the contact section.");
      setStatus("sent");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Please try again.");
      setStatus("idle");
    } finally { busy.current = false; }
  }

  return <div className="float-buddy enquiry-buddy" id="floatBuddy">
    {open && <section className="enquiry-panel" aria-label="Project enquiry chat">
      <div className="enquiry-header"><span className="enquiry-profile"><img src="/chatbot.jpeg" alt="" /><i /></span><div className="enquiry-heading"><strong>{site.name}</strong><span>Project enquiries · Replies by email</span></div><button type="button" aria-label="Close chat" onClick={() => setOpen(false)}><X size={18} /></button></div>
      <div className="enquiry-progress"><span>{status === "sent" ? "Enquiry received" : `LET’S CREATE SOMETHING · ${step + 1} OF 3`}</span><div>{questions.map((_, index) => <i key={index} className={status === "sent" || index <= step ? "active" : ""} />)}</div></div>
      <div ref={conversation} className="enquiry-body" aria-live="polite" role="log">
        {answers.map((answer, index) => <div key={index}><p className="enquiry-bot">{questions[index]}</p><p className="enquiry-answer">{answer}</p></div>)}
        {status === "sent" && <span className="enquiry-success"><Check size={22} /></span>}
        <p className="enquiry-bot">{status === "sent" ? "Thank you! Your enquiry has been sent. Pashmina will get back to you by email." : questions[step]}</p>
      </div>
      {status !== "sent" && <form className="enquiry-form" onSubmit={submit}>
        <label className="enquiry-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label htmlFor="enquiry-answer">{step === 2 ? "Your email address" : step === 1 ? "Project type and timeline" : "Your question"}</label>
        <input ref={input} id="enquiry-answer" type={step === 2 ? "email" : "text"} autoComplete={step === 2 ? "email" : "off"} value={value} onChange={event => setValue(event.target.value)} maxLength={step === 2 ? 254 : 2000} required disabled={status === "sending"} placeholder={step === 2 ? "you@example.com" : "Type your answer…"} />
        <p className="enquiry-error" role="alert">{error}</p>
        <div className="enquiry-controls">{step > 0 && <button className="enquiry-back" type="button" disabled={status === "sending"} onClick={() => { setValue(answers[step - 1]); setAnswers(answers.slice(0, -1)); setError(""); }}><ChevronLeft size={15} />Back</button>}<button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : step === 2 ? "Send enquiry" : "Continue"}{step === 2 ? <Send size={15} /> : <ArrowRight size={16} />}</button></div>
        {step === 2 && <small>Your answers and email will be sent to Pashmina so she can reply.</small>}
      </form>}
    </section>}
    <button className="enquiry-launcher" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
      <span className="float-avatar"><img src="/chatbot.jpeg" alt="" /></span><span className="float-msg">Any question?</span>
    </button>
  </div>;
}
