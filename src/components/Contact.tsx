import { useState, type FormEvent } from "react";
import { AtSign, Lock, Mail, MapPin, Phone, Send, ShieldCheck, User } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}
import { CONTACT_CHANNELS, PROFILE } from "../data/content";
import { Reveal, Section, SectionHeader, StatusDot, Tag } from "./primitives";

const ICONS = {
  mail: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  phone: Phone,
  "at-sign": AtSign,
  user: User,
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Project inquiry");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    const subj = encodeURIComponent(`[portfolio] ${subject}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subj}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-[3px] border border-line bg-deep/90 px-3.5 py-2.5 font-mono text-[13px] text-ink placeholder:text-faint/70 transition-colors focus:border-term/60 focus:outline-none focus:ring-1 focus:ring-term/30";

  return (
    <Section id="contact">
      <SectionHeader
        index="08"
        cmd="ping @moe --secure-channel"
        title="Contact"
        desc="Open a channel. Whether it is a hard Android problem, a security review, or a product that needs both — the inbox is monitored, the response SLA is 24 hours."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* channels */}
        <Reveal>
          <div className="panel-ridge h-full rounded-[4px] border border-line/80 bg-panel/70 p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">Channels</h3>
              <Tag tone="term">
                <StatusDot pulse={false} className="scale-75" /> online
              </Tag>
            </div>

            <div className="space-y-2.5">
              {CONTACT_CHANNELS.map((c) => {
                const Icon = ICONS[c.icon];
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-3.5 rounded-[4px] border border-transparent px-3 py-3 transition-all hover:border-line hover:bg-deep/70"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] border border-line bg-chip text-term transition-all group-hover:border-term/40 group-hover:shadow-[0_0_14px_rgba(0,255,163,0.25)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-faint">
                        {c.label}
                      </span>
                      <span className="block truncate font-mono text-[12.5px] text-ink group-hover:text-mint">
                        {c.value}
                      </span>
                    </span>
                    <span className="shrink-0 text-right font-mono text-[9px] text-faint">{c.note}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-5 rounded-[4px] border border-line/70 bg-deep/70 px-4 py-3.5">
              <p className="flex items-center gap-2 font-mono text-[11px] text-dim">
                <MapPin className="h-3.5 w-3.5 text-term" /> {PROFILE.location} ·{" "}
                <span className="text-cy">GMT+6:30</span>
              </p>
              <p className="mt-2 flex items-start gap-2 font-mono text-[10.5px] leading-relaxed text-faint">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-term/70" />
                PGP available on request — keys only exchanged over verified channels. No trackers were harmed on
                this page.
              </p>
            </div>
          </div>
        </Reveal>

        {/* form */}
        <Reveal delay={120}>
          <form
            onSubmit={submit}
            className="scanlines panel-ridge relative overflow-hidden rounded-[4px] border border-line/80 bg-deep/85"
          >
            <div className="flex items-center justify-between border-b border-line/70 bg-chip/60 px-5 py-3">
              <span className="font-mono text-[10.5px] text-dim">compose --to moekyawaung@fastmail.com</span>
              <Lock className="h-3.5 w-3.5 text-term/70" />
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    name <span className="text-term">*</span>
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className={field}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                    reply-to <span className="text-term">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={field}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  subject
                </span>
                <select value={subject} onChange={(e) => setSubject(e.target.value)} className={field}>
                  <option>Project inquiry</option>
                  <option>Security review / audit</option>
                  <option>Android consulting</option>
                  <option>Collaboration</option>
                  <option>Say hello</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  message <span className="text-term">*</span>
                </span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={"> describe the mission…"}
                  className={`${field} resize-none`}
                />
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-[4px] border border-term bg-term px-5 py-2.5 font-mono text-[12.5px] font-semibold text-void transition-all hover:shadow-[0_0_26px_rgba(0,255,163,0.5)]"
                >
                  <Send className="h-3.5 w-3.5" /> send_message --priority
                </button>
                {sent && (
                  <span className="font-mono text-[11px] text-term">
                    ✓ composing in your mail client — see you on the other side
                  </span>
                )}
                <span className="ml-auto font-mono text-[10px] text-faint">sla: &lt;24h · tz: GMT+6:30</span>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
