import { Heart, Terminal } from "lucide-react";
import { NAV, PROFILE } from "../data/content";
import { StatusDot } from "./primitives";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/70 bg-deep/40">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[12px] text-dim">
              <span className="text-cy">$</span> moe@kyaw-aung:~/portfolio
              <span className="text-term"> exit</span>
            </p>
            <p className="mt-1 font-mono text-[11px] text-faint">
              connection closed — exit code <span className="text-term">0</span> · thanks for the session
            </p>
          </div>

          <nav className="flex max-w-md flex-wrap gap-x-5 gap-y-2">
            {NAV.slice(1).map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="font-mono text-[11px] text-dim transition-colors hover:text-term"
              >
                {n.cmd.split(" ")[1] ?? n.cmd}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 rounded-[4px] border border-line/70 bg-chip/60 px-4 py-2.5 font-mono text-[10.5px] text-dim">
            <StatusDot pulse={false} />
            <span>
              status: <span className="text-term">SECURE</span>
            </span>
            <span className="text-faint">|</span>
            <span className="flex items-center gap-1">
              <Terminal className="h-3 w-3 text-cy" /> no trackers
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line/50 pt-6 font-mono text-[10.5px] text-faint sm:flex-row sm:items-center">
          <p>
            © 2026 <span className="text-dim">{PROFILE.name}</span> · engineered with React + Tailwind
          </p>
          <p className="flex items-center gap-1.5">
            built secure by default <Heart className="h-3 w-3 text-term" fill="currentColor" /> in Tachileik, Myanmar
          </p>
        </div>
      </div>
    </footer>
  );
}
