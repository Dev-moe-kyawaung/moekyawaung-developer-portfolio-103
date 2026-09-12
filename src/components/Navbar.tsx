import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, PROFILE } from "../data/content";
import { cn } from "../utils/cn";
import { StatusDot } from "./primitives";

function useYangonClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Yangon",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const t = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const clock = useYangonClock();
  const active = useActiveSection(NAV.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-void/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl" : "bg-void/60 backdrop-blur-md",
        )}
      >
        {/* ------------------------------ system status bar ------------------------------ */}
        <div className={cn("border-b transition-colors", scrolled ? "border-line/70" : "border-line/40")}>
          <div className="mx-auto flex h-8 max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
            <p className="truncate font-mono text-[10px] text-faint">
              <span className="text-dim">moe@kyaw-aung:</span>
              <span className="text-cy">~</span>
              <span className="text-dim">$</span> <span className="text-mint">./secure_portfolio --live</span>
              <span className="ml-2 hidden text-faint sm:inline">· build v4.2.1</span>
            </p>
            <div className="flex shrink-0 items-center gap-3 font-mono text-[10px] text-faint">
              <span className="flex items-center gap-1.5">
                <StatusDot />
                <span className="text-term">ONLINE</span>
              </span>
              <span className="hidden text-line sm:inline">|</span>
              <span className="hidden tabular-nums text-cy sm:inline">{clock}</span>
              <span className="hidden md:inline">MMT · {PROFILE.location.split(",")[0]}</span>
            </div>
          </div>
        </div>

        {/* ------------------------------ nav row ------------------------------ */}
        <div className={cn("border-b transition-colors", scrolled ? "border-line/70" : "border-transparent")}>
          <div className="mx-auto flex h-[52px] max-w-[1400px] items-center gap-4 px-5 sm:px-8">
            {/* brand */}
            <a href="#init" className="group flex shrink-0 items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-term/40 bg-term/10 font-mono text-sm font-bold text-term shadow-[0_0_14px_rgba(0,255,163,0.25)]">
                &gt;_
              </span>
              <span className="hidden md:block">
                <span className="block font-display text-[13.5px] font-semibold leading-tight text-ink">
                  {PROFILE.name}
                </span>
                <span className="block font-mono text-[8.5px] uppercase tracking-[0.22em] text-faint transition-colors group-hover:text-mint">
                  android · security-first
                </span>
              </span>
            </a>

            {/* desktop nav */}
            <nav className="scrollbar-none -mx-2 flex flex-1 items-center justify-start gap-0.5 overflow-x-auto px-2 lg:justify-center">
              {NAV.map((n) => {
                const isActive = active === n.id;
                return (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    title={`${n.label} — ${n.cmd}`}
                    className={cn(
                      "group relative flex shrink-0 flex-col items-center rounded-[3px] px-2.5 py-1.5 transition-colors sm:px-3",
                      isActive ? "bg-term/[0.08]" : "hover:bg-white/[0.04]",
                    )}
                  >
                    <span
                      className={cn(
                        "whitespace-nowrap font-mono text-[9.5px] leading-tight tracking-wide transition-colors",
                        isActive ? "text-term" : "text-faint group-hover:text-mint",
                      )}
                    >
                      {isActive && <span className="mr-1 text-term">▸</span>}
                      {n.short ?? n.cmd}
                    </span>
                    <span
                      className={cn(
                        "mt-[3px] whitespace-nowrap text-[10px] font-medium tracking-wide transition-colors",
                        isActive ? "text-ink" : "text-faint/80 group-hover:text-dim",
                      )}
                    >
                      {n.label}
                    </span>
                    {isActive && (
                      <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-term shadow-[0_0_8px_rgba(0,255,163,0.8)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* actions */}
            <div className="flex shrink-0 items-center gap-2">
              <a
                href="#contact"
                className="hidden rounded-[3px] border border-term/40 bg-term/10 px-3 py-1.5 font-mono text-[11px] text-term transition-all hover:bg-term hover:text-void hover:shadow-[0_0_18px_rgba(0,255,163,0.4)] md:block"
              >
                ./hire_me
              </a>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-line bg-chip text-ink lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-void/98 backdrop-blur-xl lg:hidden">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="relative flex h-14 items-center justify-between border-b border-line px-5 sm:px-8">
            <span className="font-mono text-[12px] text-dim">
              moe@<span className="text-term">kyaw-aung</span>:~$ <span className="text-cy">menu</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-line bg-chip text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="relative flex-1 overflow-y-auto px-5 py-6 sm:px-8">
            <div className="mx-auto flex max-w-md flex-col gap-1">
              {NAV.map((n, i) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-4 rounded-[4px] border border-transparent px-4 py-3.5 transition-colors hover:border-line hover:bg-panel"
                >
                  <span className="font-mono text-[10px] text-faint">0{i + 1}</span>
                  <span className="flex-1">
                    <span className="block font-mono text-sm text-term">{n.cmd}</span>
                    <span className="block text-[13px] text-dim group-hover:text-ink">{n.label}</span>
                  </span>
                  <span className="font-mono text-term/60">&gt;</span>
                </a>
              ))}
              <div className="mt-4 border-t border-line px-4 pt-4 font-mono text-[10px] text-faint">
                status: <span className="text-term">● online</span> · location: {PROFILE.location} ·{" "}
                <span className="text-cy">no trackers</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
