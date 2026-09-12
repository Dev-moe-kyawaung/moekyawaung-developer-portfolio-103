import { Award, BadgeCheck, ShieldCheck } from "lucide-react";
import { CERTS } from "../data/content";
import { Reveal, Section, SectionHeader, Tag } from "./primitives";

export default function Certs() {
  return (
    <Section id="certs">
      <SectionHeader
        index="06"
        cmd="verify ~/certifications --all"
        title="Certifications"
        desc="Professional certification courses completed across cybersecurity, Android, computer vision with Python, web technologies and digital growth — plus the applied practice that keeps them honest."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 80}>
            <div className="group panel-ridge relative h-full rounded-[4px] border border-line/80 bg-panel/70 p-5 transition-all duration-300 hover:border-term/35">
              <div className="mb-4 flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-line bg-chip text-term">
                  <Award className="h-5 w-5" />
                </span>
                <Tag tone={c.status === "EARNED" ? "term" : "cy"} className="uppercase">
                  <BadgeCheck className="h-3 w-3" /> {c.status}
                </Tag>
              </div>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-cy/80">{c.area}</p>
              <h3 className="mt-1.5 font-display text-[16px] font-semibold leading-snug text-ink">{c.title}</h3>
              <p className="mt-1 font-mono text-[10.5px] text-faint">{c.issuer}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <Tag key={s} tone="dim">
                    {s}
                  </Tag>
                ))}
              </div>
              <p className="mt-4 border-t border-line/50 pt-3 font-mono text-[9.5px] text-faint">{c.id}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 flex flex-col items-start gap-3 rounded-[4px] border border-line/80 bg-deep/70 px-5 py-4 sm:flex-row sm:items-center">
          <ShieldCheck className="h-5 w-5 shrink-0 text-term" />
          <p className="text-[12.5px] leading-relaxed text-dim">
            <span className="font-mono text-mint">verification:</span> credentials and identity cross-linked on{" "}
            <a
              href="https://gravatar.com/moekyawaung2026"
              target="_blank"
              rel="noreferrer"
              className="text-cy underline decoration-cy/30 underline-offset-4 hover:text-term"
            >
              Gravatar
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1"
              target="_blank"
              rel="noreferrer"
              className="text-cy underline decoration-cy/30 underline-offset-4 hover:text-term"
            >
              LinkedIn
            </a>
            . Certificates available on request — treated like API keys: shared only over a verified channel.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
