import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Fingerprint, MapPin, ShieldCheck } from "lucide-react";
import { HERO_STATS, PROFILE, TICKER, TERMINAL_QUOTES } from "../data/content";
import { Corners, Reveal, StatusDot, Tag } from "./primitives";

/* ----------------------------- typewriter hook ----------------------------- */

function useTypewriter(text: string, speed = 42, startDelay = 600) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      setDone(true);
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(function tick() {
      i += 1;
      setOut(text.slice(0, i));
      if (i < text.length) {
        timer = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [text, speed, startDelay]);
  return { out, done };
}

/* ---------------------------------- hero ----------------------------------- */

export default function Hero() {
  const { out, done } = useTypewriter("Engineering secure Android products that scale.");
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="init" className="relative overflow-hidden pt-28 md:pt-32">
      {/* atmosphere */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-term/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-160px] top-64 h-[380px] w-[380px] rounded-full bg-cy/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ------------------------------ copy column ------------------------------ */}
          <div>
            <Reveal>
              <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-[10.5px] sm:text-[11px]">
                <Tag tone="term">
                  <ShieldCheck className="h-3 w-3" /> SECURE BUILD v4.2.1
                </Tag>
                <Tag tone="dim">init: moe-kyaw-aung.portfolio</Tag>
                <Tag tone="cy">MASVS-aligned</Tag>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-cy/90 sm:text-xs">
                &gt; whoami · Android Engineer
              </p>
              <h1 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                {out}
                <span className={done ? "animate-caret ml-1.5 inline-block h-[0.9em] w-[0.045em] translate-y-[0.08em] bg-term shadow-[0_0_16px_rgba(0,255,163,0.8)]" : ""} />
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-dim sm:text-base">
                I’m <span className="font-medium text-ink">Moe Kyaw Aung</span> — an Android developer with{" "}
                <span className="text-mint">nearly 12 years</span> across the ecosystem who believes security is a
                product feature, not a checklist. Threat models before commits. OWASP MASVS as the bar. Firebase
                treated as untrusted. Certified in cybersecurity, computer vision with Python and web technologies.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-[4px] border border-term bg-term px-5 py-2.5 font-mono text-[12.5px] font-semibold text-void transition-all hover:shadow-[0_0_28px_rgba(0,255,163,0.45)]"
                >
                  ./open_channel
                  <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#audits"
                  className="group inline-flex items-center gap-2 rounded-[4px] border border-line bg-panel/70 px-5 py-2.5 font-mono text-[12.5px] text-mint transition-colors hover:border-cy/50 hover:text-cy"
                >
                  cat ~/case_studies
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>

            {/* terminal snippet */}
            <Reveal delay={320}>
              <div className="mt-9 max-w-xl overflow-hidden rounded-[4px] border border-line/80 bg-deep/90">
                <div className="flex items-center justify-between border-b border-line/70 bg-chip/60 px-4 py-2 font-mono text-[10.5px] text-dim">
                  <span>ssh moe@secure-dev — session 0x1F</span>
                  <span className="flex items-center gap-1.5 text-term">
                    <StatusDot /> active
                  </span>
                </div>
                <div className="space-y-1.5 px-4 py-3.5 font-mono text-[12px] leading-relaxed sm:text-[12.5px]">
                  {TERMINAL_QUOTES.map((q, i) => (
                    <p key={q.cmd} className={i === TERMINAL_QUOTES.length - 1 ? "crt-flicker" : ""}>
                      <span className="text-cy">$</span> <span className="text-ink">{q.cmd}</span>
                      <br />
                      <span className="pl-4 text-mint/90">→ {q.out}</span>
                    </p>
                  ))}
                  <p>
                    <span className="text-cy">$</span>
                    <span className="animate-caret ml-2 inline-block h-3.5 w-[7px] translate-y-0.5 bg-term" />
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ------------------------------ photo column ----------------------------- */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="scanlines panel-ridge relative overflow-hidden rounded-[4px] border border-line/80 bg-panel/80">
              <div className="flex items-center justify-between border-b border-line/70 bg-chip/60 px-4 py-2.5">
                <span className="font-mono text-[10.5px] text-dim">session: portrait.conf</span>
                <span className="font-mono text-[10.5px] text-term">● LIVE</span>
              </div>

              <div className="relative aspect-[4/4.4]">
                {imgOk ? (
                  <img
                    src={PROFILE.photo}
                    alt="Moe Kyaw Aung — Android Engineer"
                    onError={() => setImgOk(false)}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-chip to-deep">
                    <span className="font-mono text-6xl font-bold text-term/80">{PROFILE.monogram}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
                      portrait unavailable
                    </span>
                  </div>
                )}
                {/* overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/95 via-transparent to-void/30" />
                <div className="pointer-events-none absolute inset-0 bg-cy/5 mix-blend-overlay" />
                <div className="scan-beam" />

                {/* floating id chips */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5 font-mono text-[10px]">
                  <Tag tone="cy" className="backdrop-blur-sm">
                    <Fingerprint className="h-3 w-3" /> uid: MKA-2026
                  </Tag>
                  <Tag tone="term" className="backdrop-blur-sm">
                    <ShieldCheck className="h-3 w-3" /> clearance: secure-code
                  </Tag>
                </div>

                <div className="absolute inset-x-3 bottom-3">
                  <div className="rounded-[4px] border border-white/10 bg-void/80 p-3.5 backdrop-blur-md">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-cy">identity verified</p>
                    <p className="mt-1 font-display text-lg font-semibold text-ink">Moe Kyaw Aung</p>
                    <p className="font-mono text-[11px] text-mint">Android Engineer · Security-Minded</p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9.5px] text-faint">
                      <span className="flex items-center gap-1 text-dim">
                        <MapPin className="h-3 w-3 text-term/70" /> {PROFILE.location}
                      </span>
                      <span className="flex items-center gap-1 text-dim">
                        <StatusDot pulse={false} className="scale-75" /> available for work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Corners tone="cy" />
            </div>

            {/* hex fingerprint strip */}
            <div className="mt-3 flex items-center justify-between gap-3 overflow-hidden rounded-[4px] border border-line/70 bg-deep/80 px-3.5 py-2 font-mono text-[9.5px] text-faint">
              <span className="truncate">sha256: 9F2A·41C8·77E0·B53D·0A1E·88F4·C2B9·6D33·5E10·AA77</span>
              <a
                href={PROFILE.links.gravatar}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-cy transition-colors hover:text-term"
              >
                verify ↗
              </a>
            </div>
          </Reveal>
        </div>

        {/* ------------------------------- stats row -------------------------------- */}
        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-[4px] border border-line/80 bg-deep/60 lg:grid-cols-4">
            {HERO_STATS.map((s, i) => (
              <div
                key={s.label}
                className={
                  "group relative px-5 py-5 sm:px-7 " +
                  ([
                    "",
                    "border-l border-line/60",
                    "border-t border-line/60 lg:border-l lg:border-t-0",
                    "border-l border-t border-line/60 lg:border-t-0",
                  ][i] ?? "")
                }
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">stat_0{i + 1}</span>
                <p className="mt-1 font-display text-3xl font-bold text-term text-glow-term sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-[12px] leading-snug text-dim">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ------------------------------- ticker ---------------------------------- */}
        <div className="mask-x-fade mt-10 overflow-hidden border-y border-line/50 py-3">
          <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-mono text-[11px] tracking-[0.2em] text-faint">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="text-term/70">◆</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
