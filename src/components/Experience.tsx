import { CalendarRange, ChevronRight, MapPin } from "lucide-react";
import { EXPERIENCE } from "../data/content";
import { cn } from "../utils/cn";
import { Reveal, Section, SectionHeader, StatusDot } from "./primitives";

export default function Experience() {
  return (
    <Section id="xp">
      <SectionHeader
        index="07"
        cmd="tail -n 4 ~/.career_history"
        title="Experience"
        desc="Twelve years of Android, told in four commits — from a first APK on a borrowed device to security-first product engineering."
      />

      <div className="relative mx-auto max-w-4xl">
        {/* spine */}
        <div className="absolute bottom-4 left-[13px] top-2 w-px bg-gradient-to-b from-term/50 via-line to-transparent sm:left-[17px]" />

        <div className="space-y-8">
          {EXPERIENCE.map((x, i) => (
            <Reveal key={x.period} delay={i * 90} as="div">
              <div className="relative pl-11 sm:pl-16">
                {/* node */}
                <span
                  className={cn(
                    "absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border sm:h-9 sm:w-9",
                    x.current
                      ? "border-term/60 bg-term/10 shadow-[0_0_18px_rgba(0,255,163,0.35)]"
                      : "border-line bg-deep",
                  )}
                >
                  {x.current ? (
                    <StatusDot pulse={false} />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-cy/70" />
                  )}
                </span>

                <div
                  className={cn(
                    "panel-ridge rounded-[4px] border p-5 transition-colors sm:p-6",
                    x.current ? "border-term/30 bg-term/[0.04]" : "border-line/80 bg-panel/70 hover:border-cy/30",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span
                      className={cn(
                        "font-mono text-[10.5px] tracking-[0.15em]",
                        x.current ? "text-term" : "text-cy/80",
                      )}
                    >
                      <CalendarRange className="mr-1.5 inline h-3 w-3 -translate-y-px" />
                      {x.period}
                    </span>
                    <span className="font-mono text-[10px] text-faint">commit_{String(i + 1).padStart(2, "0")}</span>
                    {x.current && (
                      <span className="rounded-[3px] border border-term/40 bg-term/10 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider text-term">
                        ● current
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-semibold text-ink">{x.role}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[11px] text-dim">
                    <MapPin className="h-3 w-3 text-term/70" /> {x.place}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {x.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[13.5px] leading-relaxed text-dim">
                        <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-term/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={140}>
        <p className="mt-10 text-center font-mono text-[11px] text-faint">
          # full history on request — <span className="text-cy">“git log --all --author=@moe”</span> over coffee ☕
        </p>
      </Reveal>
    </Section>
  );
}
