import { FileCode2, Gauge, GitBranch, ShieldCheck, type LucideIcon } from "lucide-react";
import { PRACTICES, SKILLS, TOOLBELT } from "../data/content";
import { Meter, Reveal, Section, SectionHeader, Tag } from "./primitives";

const PRACTICE_ICONS: Record<string, LucideIcon> = {
  gitbranch: GitBranch,
  gauge: Gauge,
  shield: ShieldCheck,
  file: FileCode2,
};

export default function Engineering() {
  return (
    <Section id="android">
      <SectionHeader
        index="02"
        cmd="ls ~/android_engineering"
        title="Android Engineering"
        desc="A decade-plus of Android muscle memory: Kotlin-first, architecture-documented, performance-budgeted and security-reviewed — from single-screen utilities to multi-module POS systems."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        {/* skill meters */}
        <Reveal>
          <div className="panel-ridge h-full rounded-[4px] border border-line/80 bg-panel/70 p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">Competency Registry</h3>
              <span className="font-mono text-[10px] text-faint">./skills --report</span>
            </div>
            <div className="space-y-4">
              {SKILLS.map((s, i) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3">
                    <span className="text-[13px] font-medium text-ink">{s.name}</span>
                    <span className="font-mono text-[10px] text-faint">
                      <span className="text-cy">{s.pct}%</span> · {s.note}
                    </span>
                  </div>
                  <Meter pct={s.pct} tone={i % 2 ? "cy" : "term"} />
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-line/60 pt-4 font-mono text-[10.5px] leading-relaxed text-faint">
              # levels self-assessed against shipped work, not tutorials — see{" "}
              <a href="#repos" className="text-cy hover:text-term">~/repos</a> for receipts
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {/* toolbelt */}
          <Reveal delay={100}>
            <div className="panel-ridge rounded-[4px] border border-line/80 bg-panel/70 p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">Daily Toolbelt</h3>
                <span className="font-mono text-[10px] text-faint">which $(toolbelt)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TOOLBELT.map((t) => (
                  <Tag key={t} tone="dim" className="py-1 text-[11px]">
                    {t}
                  </Tag>
                ))}
              </div>
            </div>
          </Reveal>

          {/* mini practices grid */}
          <div className="grid flex-1 gap-5 sm:grid-cols-2">
            {PRACTICES.map((p, i) => {
              const Icon = PRACTICE_ICONS[p.icon];
              return (
                <Reveal key={p.title} delay={140 + i * 60}>
                  <div className="group panel-ridge h-full rounded-[4px] border border-line/80 bg-deep/80 p-5 transition-colors hover:border-cy/35">
                    <Icon className="mb-3 h-5 w-5 text-cy" />
                    <h4 className="text-[14px] font-semibold text-ink">{p.title}</h4>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-dim">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* methodology band */}
      <Reveal delay={120}>
        <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-[4px] border border-cy/25 bg-cy/[0.04] px-5 py-4 sm:flex-row sm:items-center">
          <p className="font-mono text-[11.5px] leading-relaxed text-dim sm:text-[12px]">
            <span className="text-cy">method</span> — "a secure app is the sum of boring, correct decisions:
            right-sized permissions, encrypted at rest, verified in transit, reviewed at merge, measured every
            release."
          </p>
          <a
            href="#audits"
            className="shrink-0 rounded-[3px] border border-cy/40 px-4 py-2 font-mono text-[11.5px] text-cy transition-all hover:bg-cy hover:text-void"
          >
            view audit reports →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
