import { useEffect, useRef, useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, ExternalLink, Info, Target } from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal, Section, SectionHeader, Tag } from "./primitives";

/* ------------------------------- tiny highlighter ---------------------------- */

const COMMENT_MARKERS = ["#", "//", "<!--", "-->", "/*", "*", "*/"];
const KEYWORDS = new Set([
  "val", "var", "fun", "override", "if", "else", "return", "class", "object", "private", "internal",
  "suspend", "when", "is", "in", "import", "package", "data", "match", "allow", "read", "write",
  "true", "false", "null", "try", "catch", "for", "await", "interface", "enum",
]);

function CodeLine({ text }: { text: string }) {
  const trimmed = text.trim();
  const isComment = COMMENT_MARKERS.some((m) => trimmed.startsWith(m)) || text.includes("#");
  if (isComment) {
    return <span className="italic text-faint">{text || " "}</span>;
  }
  const tokens = text.split(/(\s+)/);
  return (
    <>
      {tokens.map((tok, i) => {
        const clean = tok.replace(/[^A-Za-z_]/g, "");
        if (KEYWORDS.has(clean)) return <span key={i} className="text-cy">{tok}</span>;
        if (/^[A-Z][A-Za-z0-9]*$/.test(clean) && clean.length > 1) {
          return <span key={i} className="text-amber/90">{tok}</span>;
        }
        return <span key={i}>{tok}</span>;
      })}
    </>
  );
}

/* -------------------------------- findings row ------------------------------- */

const FINDING_META = {
  info: { icon: Info, cls: "text-cy", label: "INFO" },
  warn: { icon: AlertTriangle, cls: "text-amber", label: "WARN" },
  fixed: { icon: CheckCircle2, cls: "text-term", label: "FIXED" },
};

/* ---------------------------------- section ---------------------------------- */

export default function CaseStudies({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  const study = CASE_STUDIES.find((s) => s.id === active) ?? CASE_STUDIES[0];
  const [panelKey, setPanelKey] = useState(study.id);
  const prevRef = useRef(active);

  useEffect(() => {
    if (prevRef.current !== active) {
      setPanelKey(active);
      prevRef.current = active;
    }
  }, [active]);

  return (
    <Section id="audits" className="relative">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cy/[0.04] blur-[140px]" />

      <SectionHeader
        index="04"
        cmd="open ~/audit_reports"
        title="Case Studies"
        desc="Post-mortems written like security reports: what was at risk, what was decided, what shipped — measured, not vibes."
      />

      {/* tab rail */}
      <Reveal>
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CASE_STUDIES.map((s) => {
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelect(s.id)}
                className={cn(
                  "shrink-0 rounded-[4px] border px-4 py-2.5 text-left transition-all duration-200",
                  isActive
                    ? "border-term/60 bg-term/10 font-mono text-term shadow-[0_0_20px_-6px_rgba(0,255,163,0.5)]"
                    : "border-line/80 bg-panel/60 font-mono text-dim hover:border-cy/40 hover:text-cy",
                )}
              >
                <span className={cn("mr-2 text-[10px]", isActive ? "text-term/70" : "text-faint")}>{s.num}</span>
                {s.title.split("—")[0].trim()}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* report body */}
      <div key={panelKey} className="anim-rise">
        <Reveal>
          <div className="scanlines panel-ridge overflow-hidden rounded-[4px] border border-line/80 bg-deep/85">
            {/* report header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/70 bg-chip/60 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-faint">{study.num}/05</span>
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{study.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-faint">{study.cmd}</span>
                <span className="hidden font-mono text-[10px] text-term sm:inline">audited ✓</span>
              </div>
            </div>

            {/* meta strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line/60 px-4 py-3 sm:px-6">
              <span className="flex items-center gap-2 font-mono text-[11px] text-dim">
                <Target className="h-3.5 w-3.5 text-term" /> {study.project}
              </span>
              <span className="font-mono text-[10.5px] text-amber/90">severity: {study.severity}</span>
              <div className="flex flex-wrap gap-1.5">
                {study.focus.map((f) => (
                  <Tag key={f} tone="dim">{f}</Tag>
                ))}
              </div>
              <a
                href={study.repo}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1 font-mono text-[10.5px] text-cy hover:text-term"
              >
                repo <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.6fr_1fr]">
              {/* left: narrative */}
              <div className="space-y-7 border-b border-line/60 p-5 sm:p-7 lg:border-b-0 lg:border-r">
                <p className="border-l-2 border-term/50 pl-4 text-[13.5px] italic leading-relaxed text-mint/90 sm:text-[14px]">
                  “{study.tagline}”
                </p>

                <div>
                  <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cy">// the challenge</h4>
                  <p className="text-[13.5px] leading-relaxed text-dim">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-cy">// approach</h4>
                  <ol className="space-y-2.5">
                    {study.approach.map((a, i) => (
                      <li key={i} className="flex gap-3 text-[13.5px] leading-relaxed text-dim">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-term/30 bg-term/10 font-mono text-[10px] text-term">
                          {i + 1}
                        </span>
                        {a}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* code */}
                <div className="overflow-hidden rounded-[4px] border border-line/70 bg-[#060c0e]">
                  <div className="flex items-center justify-between border-b border-line/60 bg-chip/50 px-3.5 py-2">
                    <span className="font-mono text-[10px] text-dim">{study.code.title}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-faint">{study.code.lang}</span>
                  </div>
                  <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[11.5px] leading-[1.75] text-[#c8e2d8]">
                    {study.code.body.split("\n").map((line, i) => (
                      <div key={i} className="grid grid-cols-[2.2rem_1fr]">
                        <span className="select-none pr-3 text-right text-faint/50">{i + 1}</span>
                        <span><CodeLine text={line} /></span>
                      </div>
                    ))}
                  </pre>
                </div>

                <div>
                  <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cy">// outcome</h4>
                  <p className="text-[13.5px] leading-relaxed text-dim">{study.outcome}</p>
                </div>
              </div>

              {/* right: findings + metrics */}
              <div className="flex flex-col gap-6 p-5 sm:p-7">
                <div>
                  <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">// audit findings</h4>
                  <div className="space-y-2">
                    {study.findings.map((f, i) => {
                      const M = FINDING_META[f.level];
                      return (
                        <div key={i} className="flex items-start gap-2.5 rounded-[3px] border border-line/60 bg-void/50 px-3 py-2">
                          <M.icon className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", M.cls)} />
                          <div>
                            <span className={cn("mr-2 font-mono text-[9px] tracking-wider", M.cls)}>{M.label}</span>
                            <span className="text-[12px] leading-relaxed text-dim">{f.text}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-term">// before → after</h4>
                  <div className="overflow-hidden rounded-[4px] border border-line/70">
                    {study.metrics.map((m, i) => (
                      <div
                        key={m.label}
                        className={cn(
                          "grid grid-cols-[1fr_auto] items-center gap-x-3 px-3.5 py-3 sm:grid-cols-[1.2fr_auto_auto_auto]",
                          i % 2 ? "bg-void/40" : "bg-panel/40",
                        )}
                      >
                        <span className="col-span-2 text-[11.5px] leading-snug text-dim sm:col-span-1">{m.label}</span>
                        <span className="hidden text-right font-mono text-[11px] text-rose/80 line-through decoration-rose/40 sm:block">
                          {m.before}
                        </span>
                        <ArrowRight className="hidden h-3 w-3 text-faint sm:block" />
                        <span className="font-mono text-[11.5px] font-semibold text-term text-glow-term sm:text-right">
                          {m.after}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto rounded-[4px] border border-term/20 bg-term/[0.05] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">verdict</p>
                  <p className="mt-1.5 font-mono text-[12px] leading-relaxed text-mint">
                    <span className="text-term">[ PASS ]</span> — control objective met. Pattern promoted to the
                    portfolio default template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .anim-rise { animation: animRise .45s cubic-bezier(.22,.9,.3,1) both; }
        @keyframes animRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Section>
  );
}

export type { CaseStudy };
