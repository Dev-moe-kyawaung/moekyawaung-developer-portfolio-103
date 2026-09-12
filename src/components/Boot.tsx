import { useEffect, useState } from "react";

const LINES = [
  { t: "moe-kyaw-aung.portfolio --secure", d: 0, ok: false },
  { t: "establishing TLS 1.3 channel …", d: 260, ok: true },
  { t: "verifying identity: gravatar + linkedin …", d: 520, ok: true },
  { t: "decrypting payload …", d: 780, ok: true },
];

export default function Boot() {
  const [gone, setGone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setGone(true);
      setTimeout(() => setHidden(true), 550);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <button
      type="button"
      aria-label="Skip boot sequence"
      onClick={() => {
        setGone(true);
        setTimeout(() => setHidden(true), 250);
      }}
      className={`fixed inset-0 z-[90] flex cursor-pointer items-center justify-center bg-void transition-opacity duration-500 ${
        gone ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="grid-bg-fade pointer-events-none absolute inset-0" />
      <div className="relative w-[min(92vw,460px)] rounded-[4px] border border-line/80 bg-deep/90 p-5 shadow-[0_0_80px_-20px_rgba(0,255,163,0.25)]">
        <div className="mb-4 flex items-center justify-between border-b border-line/70 pb-3">
          <span className="font-mono text-[11px] text-dim">secure-boot v4.2.1</span>
          <span className="font-mono text-[10px] text-faint">click to skip</span>
        </div>
        <div className="space-y-2 font-mono text-[12px] leading-relaxed">
          {LINES.map((l) => (
            <p key={l.t} style={{ opacity: 0, animation: `bootline 0.01s linear ${l.d}ms forwards` }}>
              <span className="text-cy">$</span> <span className="text-ink">{l.t}</span>
              {l.ok && <span className="ml-2 text-term">[ OK ]</span>}
            </p>
          ))}
          <p style={{ opacity: 0, animation: "bootline 0.01s linear 1000ms forwards" }}>
            <span className="animate-caret ml-1 inline-block h-3.5 w-[7px] translate-y-0.5 bg-term" />
          </p>
        </div>
      </div>
      <style>{`@keyframes bootline { to { opacity: 1; } }`}</style>
    </button>
  );
}
