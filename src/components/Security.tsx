import { Bug, Eye, Fingerprint, KeyRound, ScanSearch, ShieldCheck, TerminalSquare, type LucideIcon } from "lucide-react";
import { SEC_CHECKLIST, SECURITY_PRINCIPLES } from "../data/content";
import { Reveal, Section, SectionHeader, StatusDot, Tag } from "./primitives";

const ICONS: Record<string, LucideIcon> = {
  bug: Bug,
  shield: ShieldCheck,
  key: KeyRound,
  scan: ScanSearch,
  fingerprint: Fingerprint,
  eye: Eye,
};

export default function Security() {
  return (
    <Section id="security">
      <SectionHeader
        index="01"
        cmd="cat /security_mindset"
        title="Security Mindset"
        desc="Security is not a phase at the end of the sprint. It is the frame every decision is made in — from the first Gradle file to the last Play Console release."
      />

      <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
        {/* principle cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {SECURITY_PRINCIPLES.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.title} delay={i * 70}>
                <div className="group panel-ridge relative h-full rounded-[4px] border border-line/80 bg-panel/70 p-5 transition-all duration-300 hover:border-term/40 hover:bg-panel">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-term/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-term/30 bg-term/10 text-term transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(0,255,163,0.35)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] text-faint transition-colors group-hover:text-cy">
                      {p.cmd}
                    </span>
                  </div>
                  <h3 className="font-display text-[17px] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-dim">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* checklist console */}
        <Reveal delay={150}>
          <div className="scanlines panel-ridge sticky top-24 overflow-hidden rounded-[4px] border border-line/80 bg-deep/85">
            <div className="flex items-center justify-between border-b border-line/70 bg-chip/60 px-4 py-2.5">
              <span className="flex items-center gap-2 font-mono text-[10.5px] text-dim">
                <TerminalSquare className="h-3.5 w-3.5 text-term" /> ./security_audit --checklist
              </span>
              <Tag tone="term">
                <StatusDot pulse={false} className="scale-75" /> PASSING
              </Tag>
            </div>
            <div className="px-4 py-4 font-mono text-[12px] leading-relaxed">
              <p className="text-faint"># baseline posture — every project I ship should pass this:</p>
              {SEC_CHECKLIST.map((c, i) => (
                <p key={i} className="mt-2 flex items-start gap-2.5">
                  <span className={c.ok ? "text-term" : "text-rose"}>
                    {c.ok ? "[✓]" : "[✗]"}
                  </span>
                  <span className={c.ok ? "text-dim" : "text-rose"}>{c.text}</span>
                </p>
              ))}
              <div className="mt-4 rounded-[3px] border border-line/60 bg-void/60 px-3 py-2.5">
                <p className="text-faint"># threat-model gate</p>
                <p className="mt-1 text-mint">
                  result: <span className="text-term">PASS</span> — 0 findings of severity &gt; LOW outstanding
                </p>
                <p className="mt-1 text-cy">next audit: scheduled with every release candidate</p>
              </div>
              <p className="mt-3 text-faint">
                <span className="text-cy">$</span>
                <span className="animate-caret ml-1.5 inline-block h-3 w-[6px] translate-y-0.5 bg-term" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
