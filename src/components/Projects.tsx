import { ArrowUpRight, FolderGit2, GitBranch, Lock } from "lucide-react";
import { PROJECTS } from "../data/content";
import { Reveal, Section, SectionHeader, Tag } from "./primitives";

const STATUS_META = {
  stable: { label: "stable", tone: "term" as const, dot: "bg-term" },
  active: { label: "active", tone: "cy" as const, dot: "bg-cy" },
  demo: { label: "demo", tone: "amber" as const, dot: "bg-amber" },
};

export default function Projects({ onOpenStudy }: { onOpenStudy: (id: string) => void }) {
  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        cmd="ls ~/selected_projects"
        title="Selected Projects"
        desc="A slice of 30+ shipped builds — each one engineered with the same bar: clean architecture, honest permissions, hardened backends."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => {
          const st = STATUS_META[p.status];
          return (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <article className="group panel-ridge relative flex h-full flex-col overflow-hidden rounded-[4px] border border-line/80 bg-panel/70 transition-all duration-300 hover:-translate-y-1 hover:border-term/40">
                {/* header strip */}
                <div className="flex items-center justify-between border-b border-line/70 bg-chip/60 px-4 py-2.5">
                  <span className="flex min-w-0 items-center gap-2 font-mono text-[10.5px] text-dim">
                    <FolderGit2 className="h-3.5 w-3.5 shrink-0 text-term/70" />
                    <span className="truncate">{p.cmd}</span>
                  </span>
                  <Tag tone={st.tone} className="shrink-0">
                    <span className={`h-1.5 w-1.5 rounded-full ${st.dot}`} />
                    {st.label}
                  </Tag>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-mint">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-dim">{p.desc}</p>

                  {/* security line */}
                  <div className="mt-4 flex items-start gap-2 rounded-[3px] border border-term/15 bg-term/[0.05] px-3 py-2">
                    <Lock className="mt-0.5 h-3 w-3 shrink-0 text-term" />
                    <span className="font-mono text-[10.5px] leading-relaxed text-mint/90">{p.security}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Tag key={s} tone="dim">
                        {s}
                      </Tag>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-line/60 px-4 py-3">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-faint">
                    <GitBranch className="h-3 w-3" /> main · {p.lang}
                  </span>
                  <div className="flex items-center gap-1">
                    {p.caseStudy && (
                      <button
                        type="button"
                        onClick={() => onOpenStudy(p.caseStudy!)}
                        className="rounded-[3px] border border-cy/30 px-2 py-1 font-mono text-[10px] text-cy transition-colors hover:bg-cy hover:text-void"
                      >
                        case study
                      </button>
                    )}
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${p.name} on GitHub`}
                        className="flex h-[26px] w-[26px] items-center justify-center rounded-[3px] border border-line text-dim transition-colors hover:border-term/50 hover:text-term"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={100}>
        <p className="mt-6 text-center font-mono text-[11px] text-faint">
          # +24 more in the archive —{" "}
          <a href="#repos" className="text-cy underline decoration-cy/30 underline-offset-4 hover:text-term">
            ls ~/github_repos
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
