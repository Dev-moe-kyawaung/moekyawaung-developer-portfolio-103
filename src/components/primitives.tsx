import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------------------------------- Reveal ---------------------------------- */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        seen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------- Section header ------------------------------ */

export function SectionHeader({
  index,
  cmd,
  title,
  desc,
}: {
  index: string;
  cmd: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="mb-3 flex items-center gap-3 font-mono text-[11px] tracking-wider text-term/80 sm:text-xs">
        <span className="text-faint">moe@sec:~$</span>
        <span>{cmd}</span>
        <span className="animate-caret inline-block h-3.5 w-[7px] bg-term/70" />
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
          <span className="mr-3 font-mono text-sm font-normal text-cy align-middle">[{index}]</span>
          {title}
        </h2>
        {desc && (
          <p className="max-w-xl border-l-2 border-term/30 pl-4 text-sm leading-relaxed text-dim">
            {desc}
          </p>
        )}
      </div>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-term/40 via-line to-transparent" />
    </Reveal>
  );
}

/* --------------------------------- Frames ------------------------------------ */

export function Corners({ className, tone = "term" }: { className?: string; tone?: "term" | "cy" }) {
  const c = tone === "cy" ? "border-cy/70" : "border-term/60";
  const base = "pointer-events-none absolute h-3 w-3 border-0";
  return (
    <>
      <span aria-hidden className={cn(base, c, "left-0 top-0 border-l border-t", className)} />
      <span aria-hidden className={cn(base, c, "right-0 top-0 border-r border-t", className)} />
      <span aria-hidden className={cn(base, c, "bottom-0 left-0 border-b border-l", className)} />
      <span aria-hidden className={cn(base, c, "bottom-0 right-0 border-b border-r", className)} />
    </>
  );
}

export function Panel({
  children,
  className,
  tone = "term",
}: {
  children: ReactNode;
  className?: string;
  tone?: "term" | "cy";
}) {
  return (
    <div className={cn("panel-ridge relative rounded-sm border border-line/80 bg-panel/80 backdrop-blur-sm", className)}>
      {children}
      <Corners tone={tone} />
    </div>
  );
}

export function WindowBar({
  title,
  right,
  tone = "green",
}: {
  title: string;
  right?: ReactNode;
  tone?: "green" | "cyan";
}) {
  const dots = tone === "green" ? "bg-[#ff5f57] bg-[#febc2e] bg-[#28c840]" : "bg-[#ff5f57] bg-[#febc2e] bg-[#28c840]";
  return (
    <div className="flex items-center justify-between gap-3 border-b border-line/70 bg-chip/60 px-4 py-2.5">
      <div className="flex min-w-0 items-center gap-3">
        <div className={cn("flex gap-1.5", dots)}>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/90" />
        </div>
        <span className="truncate font-mono text-[11px] text-dim">{title}</span>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

/* ---------------------------------- Chips ------------------------------------ */

export function Tag({ children, tone = "term", className }: { children: ReactNode; tone?: "term" | "cy" | "amber" | "dim"; className?: string }) {
  const tones = {
    term: "border-term/25 bg-term/10 text-mint",
    cy: "border-cy/25 bg-cy/10 text-cy",
    amber: "border-amber/25 bg-amber/10 text-amber",
    dim: "border-white/10 bg-white/5 text-dim",
  };
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-[3px] border px-2 py-0.5 font-mono text-[10.5px] tracking-wide", tones[tone], className)}>
      {children}
    </span>
  );
}

export function StatusDot({ className, pulse = true }: { className?: string; pulse?: boolean }) {
  return (
    <span className={cn("relative inline-flex h-2 w-2", className)}>
      {pulse && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-term/50" />}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-term shadow-[0_0_8px_rgba(0,255,163,0.9)]" />
    </span>
  );
}

/* -------------------------------- Copy button -------------------------------- */

export function CopyButton({ text, label = "copy", className }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[3px] border border-line bg-chip px-2 py-1 font-mono text-[10.5px] uppercase tracking-wider text-dim transition-colors hover:border-term/40 hover:text-mint",
        copied && "border-term/50 text-term",
        className,
      )}
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "copied" : label}
    </button>
  );
}

/* --------------------------------- Progress ---------------------------------- */

export function Meter({ pct, tone = "term" }: { pct: number; tone?: "term" | "cy" }) {
  return (
    <div className="h-[7px] w-full overflow-hidden rounded-sm border border-line/60 bg-deep">
      <div
        className={cn(
          "h-full transition-all duration-1000 ease-out",
          tone === "cy" ? "bg-gradient-to-r from-cy/70 to-cy" : "bg-gradient-to-r from-term/60 to-term",
        )}
        style={{ width: `${pct}%`, boxShadow: tone === "cy" ? "0 0 12px rgba(56,225,255,.5)" : "0 0 12px rgba(0,255,163,.45)" }}
      />
    </div>
  );
}

/* ------------------------------- Section shell -------------------------------- */

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28", className)}>
      {children}
    </section>
  );
}
