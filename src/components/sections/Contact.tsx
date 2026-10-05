"use client";

import { motion } from "framer-motion";
import { Mail, Copy, Check, Send, Loader2, Phone, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";

const WEB3FORMS_ACCESS_KEY = "d65ab4a9-d629-4c0d-87ad-6d09af6ae162";

// ── Icons ─────────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ── Copy button ───────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handle}
      className="transition-colors p-1 rounded"
      style={{ color: copied ? "#06b6d4" : "#A8B5D0" }}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

// ── Decorative orbiting </> element ─────────────────────────────────────────
function CodeOrb() {
  return (
    <div className="relative w-28 h-28 flex-shrink-0 hidden sm:flex items-center justify-center">
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full animate-[spin_12s_linear_infinite]"
        style={{ border: "1.5px dashed rgba(6,182,212,0.4)" }}
      />
      {/* Inner ring */}
      <div
        className="absolute inset-3 rounded-full animate-[spin_8s_linear_infinite_reverse]"
        style={{ border: "1px solid rgba(168,85,247,0.35)" }}
      />
      {/* Center glow */}
      <div
        className="absolute inset-5 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)" }}
      />
      {/* Code tag */}
      <span
        className="relative z-10 font-bold text-lg tracking-tight"
        style={{
          background: "linear-gradient(90deg,#06b6d4,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: "monospace",
        }}
      >
        &lt;/&gt;
      </span>
      {/* Dot accents */}
      <div className="absolute top-1 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-80 animate-pulse" />
      <div className="absolute bottom-3 left-2 w-1 h-1 rounded-full bg-purple-400 opacity-70 animate-ping" />
    </div>
  );
}

// ── Styled input field ────────────────────────────────────────────────────────
function StyledField({
  icon,
  children,
  error,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
        style={{
          background: "rgba(6,15,40,0.8)",
          border: `1px solid ${error ? "#ef4444" : "rgba(6,182,212,0.25)"}`,
        }}
        onFocus={() => {}}
      >
        <span style={{ color: "#06b6d4", flexShrink: 0 }}>{icon}</span>
        {children}
      </div>
      {error && <span className="text-xs text-red-400 pl-1">{error}</span>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export function Contact() {
  const { email, phone, github, linkedin } = portfolioData.personalInfo;

  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleNameChange = (val: string) => {
    const cleaned = val.replace(/[^a-zA-Z\s]/g, "");
    setName(cleaned);
    setErrors((p) => ({ ...p, name: cleaned.trim() && !/^[a-zA-Z\s]+$/.test(cleaned) ? "Name can only contain letters." : "" }));
  };

  const handleEmailChange = (val: string) => {
    setUserEmail(val);
    setErrors((p) => ({ ...p, email: val && !val.endsWith("@gmail.com") ? "Only @gmail.com addresses accepted." : "" }));
  };

  const handleMessageChange = (val: string) => {
    const cleaned = val.replace(/[^a-zA-Z\s.,!?'"-]/g, "");
    setMessage(cleaned);
    setErrors((p) => ({ ...p, message: "" }));
  };

  const isFormValid =
    name.trim() !== "" &&
    /^[a-zA-Z\s]+$/.test(name) &&
    userEmail.endsWith("@gmail.com") &&
    message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name, email: userEmail, message,
          subject: `Portfolio Contact from ${name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName(""); setUserEmail(""); setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // Shared input/textarea style
  const fieldStyle: React.CSSProperties = {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#F5F7FF",
    fontSize: "14px",
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-10 -left-20 w-[460px] h-[460px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/3 right-0 w-[380px] h-[380px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 70%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />
        {/* Curved lines top-right */}
        <svg className="absolute top-0 right-0 w-[40%] h-auto opacity-[0.07]" viewBox="0 0 500 400" fill="none">
          <ellipse cx="420" cy="120" rx="280" ry="180" stroke="url(#cg)" strokeWidth="1.2" />
          <ellipse cx="480" cy="220" rx="180" ry="120" stroke="url(#cg)" strokeWidth="0.8" />
          <defs>
            <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #a8b5d0 1px, transparent 1px)", backgroundSize: "38px 38px" }} />
      </div>

      <div className="container mx-auto px-6 md:px-12">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-12 relative"
        >
          {/* Decorative </> top-right */}
          <div
            className="absolute right-0 top-0 text-5xl font-black select-none pointer-events-none hidden md:block"
            style={{
              fontFamily: "monospace",
              background: "linear-gradient(135deg,#06b6d4,#a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 18px rgba(6,182,212,0.5))",
              opacity: 0.9,
            }}
          >
            &lt;/&gt;
          </div>

          <h2
            className="text-[32px] md:text-[42px] font-[700] tracking-tight mb-6 leading-[1.2]"
          >
            <span style={{ color: "#F5F7FF" }}>Let&apos;s Build </span>
            <span
              style={{
                background: "linear-gradient(90deg,#06b6d4 0%,#a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Something Together
            </span>
          </h2>

          {/* Quote-bar description */}
          <div className="flex items-start gap-4 max-w-xl">
            <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: "linear-gradient(180deg,#06b6d4,#a855f7)" }} />
            <p className="text-lg leading-relaxed" style={{ color: "#A8B5D0" }}>
              If you have an internship, job opportunity, or project in mind, I&apos;d love to connect.
            </p>
          </div>
        </motion.div>

        {/* ── Main Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="glow-card relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(8,16,40,0.85)",
            border: "1.5px solid rgba(6,182,212,0.35)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 60px rgba(6,182,212,0.08), 0 0 0 1px rgba(168,85,247,0.08) inset",
          }}
        >
          {/* Top gradient line */}
          <div className="absolute top-0 left-[5%] right-[5%] h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(6,182,212,0.6),rgba(168,85,247,0.4),transparent)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── LEFT — Reach Me Directly ── */}
            <div
              className="p-8 md:p-10 flex flex-col gap-7 relative"
              style={{ borderBottom: "1px solid rgba(6,182,212,0.15)" }}
            >
              {/* Left column right border on lg */}
              <div className="hidden lg:block absolute right-0 top-[8%] bottom-[8%] w-px"
                style={{ background: "linear-gradient(180deg,transparent,rgba(6,182,212,0.3),rgba(168,85,247,0.2),transparent)" }} />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)" }}>
                      <Send size={16} style={{ color: "#06b6d4" }} />
                    </div>
                    <h3 className="text-[clamp(21px,3vw,26px)] font-[700] leading-[1.3]" style={{ color: "#F5F7FF" }}>Reach Me Directly</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#A8B5D0" }}>
                    Email is the best way for detailed messages. You can also quickly call me or connect on social platforms.
                  </p>
                </div>
                <CodeOrb />
              </div>

              {/* Social icon row */}
              <div className="flex items-center gap-3">
                {[
                  { href: github, title: "GitHub", icon: <GithubIcon />, glow: "rgba(200,200,255,0.3)" },
                  { href: linkedin, title: "LinkedIn", icon: <LinkedinIcon />, glow: "rgba(0,119,181,0.4)" },
                  { href: `mailto:${email}`, title: "Email", icon: <Mail size={18} />, glow: "rgba(234,67,53,0.4)" },
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    title={s.title}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(10,22,40,0.8)",
                      border: "1px solid rgba(6,182,212,0.3)",
                      color: "#A8B5D0",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = s.glow.replace("0.4", "0.8").replace("0.3", "0.8");
                      el.style.boxShadow = `0 0 16px ${s.glow}`;
                      el.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(6,182,212,0.3)";
                      el.style.boxShadow = "";
                      el.style.color = "#A8B5D0";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: "linear-gradient(90deg,rgba(6,182,212,0.2),rgba(168,85,247,0.1),transparent)" }} />

              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email card */}
                <div
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                  style={{ background: "rgba(6,15,40,0.7)", border: "1px solid rgba(6,182,212,0.2)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(6,182,212,0.1)" }}>
                    <Mail size={14} style={{ color: "#06b6d4" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] tracking-[0.18em] uppercase font-bold mb-0.5" style={{ color: "#6B7FA3" }}>
                      Official Email
                    </div>
                    <div className="flex items-center gap-1">
                      <a href={`mailto:${email}`}
                        className="text-[clamp(11px,1.5vw,13px)] font-[600] truncate hover:underline"
                        style={{ color: "#C4CFE4" }}>{email}</a>
                      <CopyButton text={email} />
                    </div>
                  </div>
                </div>

                {/* Phone card */}
                <div
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                  style={{ background: "rgba(6,15,40,0.7)", border: "1px solid rgba(168,85,247,0.2)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(168,85,247,0.1)" }}>
                    <Phone size={14} style={{ color: "#a855f7" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] tracking-[0.18em] uppercase font-bold mb-0.5" style={{ color: "#6B7FA3" }}>
                      Phone Number
                    </div>
                    <div className="flex items-center gap-1">
                      <a href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-[clamp(11px,1.5vw,13px)] font-[600] hover:underline"
                        style={{ color: "#C4CFE4" }}>{phone}</a>
                      <CopyButton text={phone} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT — Send a Message ── */}
            <div className="p-8 md:p-10 flex flex-col gap-6">

              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.3)" }}>
                    <MessageSquare size={16} style={{ color: "#a855f7" }} />
                  </div>
                  <h3 className="text-[clamp(21px,3vw,26px)] font-[700] leading-[1.3]" style={{ color: "#F5F7FF" }}>Send a Message</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#A8B5D0" }}>
                  Interested in collaborating? Fill the form and I&apos;ll get back to you.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">

                {/* Name */}
                <StyledField icon={<User size={15} />} error={errors.name}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    required
                    disabled={status === "sending"}
                    style={fieldStyle}
                    className="placeholder:text-[#4A5A7A] disabled:opacity-50"
                  />
                </StyledField>

                {/* Email */}
                <StyledField icon={<Mail size={15} />} error={errors.email}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={userEmail}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required
                    disabled={status === "sending"}
                    style={fieldStyle}
                    className="placeholder:text-[#4A5A7A] disabled:opacity-50"
                  />
                </StyledField>

                {/* Message */}
                <StyledField icon={<MessageSquare size={15} />} error={errors.message}>
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => handleMessageChange(e.target.value)}
                    required
                    rows={4}
                    disabled={status === "sending"}
                    style={{ ...fieldStyle, resize: "none" }}
                    className="placeholder:text-[#4A5A7A] disabled:opacity-50"
                  />
                </StyledField>

                {/* Status messages */}
                {status === "success" && (
                  <p className="text-sm font-medium flex items-center gap-2" style={{ color: "#06b6d4" }}>
                    <Check size={16} /> Message sent! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm font-medium" style={{ color: "#ef4444" }}>
                    Something went wrong. Please email me directly at {email}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={!isFormValid || status === "sending" || status === "success"}
                  className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(90deg,#06b6d4 0%,#6366f1 50%,#a855f7 100%)",
                    boxShadow: "0 0 24px rgba(6,182,212,0.3), 0 0 8px rgba(168,85,247,0.2)",
                  }}
                  onMouseEnter={e => {
                    if (!e.currentTarget.disabled)
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(6,182,212,0.45), 0 0 16px rgba(168,85,247,0.35)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(6,182,212,0.3), 0 0 8px rgba(168,85,247,0.2)";
                  }}
                >
                  {status === "sending" ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
