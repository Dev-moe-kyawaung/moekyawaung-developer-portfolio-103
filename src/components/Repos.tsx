import { useEffect, useState } from "react";
import { ExternalLink, GitFork, Loader2, RefreshCw, Star, TerminalSquare } from "lucide-react";
import {
  GITHUB_API,
  GITHUB_ORG,
  LANG_COLORS,
  PROFILE,
  REPO_FALLBACK,
  type Repo,
} from "../data/content";
import { cn } from "../utils/cn";
import { CopyButton, Reveal, Section, SectionHeader, Tag } from "./primitives";

type FetchState =
  | { status: "loading" }
  | { status: "ok"; repos: Repo[] }
  | { status: "fallback"; repos: Repo[] };

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(GITHUB_API, { headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) throw new Error(String(res.status));
  const data = (await res.json()) as Array<{
    name: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    html_url: string;
    fork: boolean;
    archived: boolean;
  }>;
  return data
    .filter((r) => !r.fork && !r.archived)
    .slice(0, 9)
    .map((r) => ({
      name: r.name,
      desc: r.description ?? "Repository — see README for security & architecture notes.",
      lang: r.language ?? "—",
      stars: r.stargazers_count,
      forks: r.forks_count,
      updated: new Date(r.updated_at).toISOString().slice(0, 7),
      url: r.html_url,
    }));
}

const GH_ACCOUNTS = [
  { label: "moekyawaung-tech", url: PROFILE.links.githubMain, note: "primary · apps & tools" },
  { label: "Dev-moe-kyawaung", url: PROFILE.links.githubAlt, note: "senior-level examples" },
  { label: "Moekyawaung-cyber", url: PROFILE.links.githubCyber, note: "web & cyber experiments" },
];

export default function Repos() {
  const [state, setState] = useState<FetchState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let alive = true;
    setState({ status: "loading" });
    fetchRepos()
      .then((repos) => alive && setState({ status: "ok", repos }))
      .catch(() => alive && setState({ status: "fallback", repos: REPO_FALLBACK }));
    return () => {
      alive = false;
    };
  }, [attempt]);

  const repos = state.status === "loading" ? [] : state.repos;

  return (
    <Section id="repos">
      <SectionHeader
        index="05"
        cmd="git remote -v"
        title="GitHub Repositories"
        desc="Live index of public work — fetched straight from the API when the channel allows, cached archives otherwise."
      />

      {/* account rail */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {GH_ACCOUNTS.map((a, i) => (
          <Reveal key={a.url} delay={i * 70}>
            <a
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="group panel-ridge flex items-center gap-3 rounded-[4px] border border-line/80 bg-panel/70 px-4 py-3 transition-all hover:border-term/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] border border-line bg-chip font-mono text-[11px] font-bold text-term">
                {a.label.slice(0, 2).toUpperCase()}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-mono text-[12px] text-ink group-hover:text-term">
                  @{a.label}
                </span>
                <span className="block truncate text-[11px] text-faint">{a.note}</span>
              </span>
              <ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 text-faint group-hover:text-term" />
            </a>
          </Reveal>
        ))}
      </div>

      {/* live fetch console state */}
      {state.status === "loading" && (
        <div className="mb-6 flex items-center gap-3 rounded-[4px] border border-line/70 bg-deep/70 px-4 py-3 font-mono text-[12px] text-dim">
          <Loader2 className="h-4 w-4 animate-spin text-term" />
          <span>
            <span className="text-cy">$</span> git ls-remote https://github.com/{GITHUB_ORG} …
          </span>
          <span className="ml-auto hidden text-faint sm:inline">fetching live repo index</span>
        </div>
      )}
      {state.status === "fallback" && (
        <div className="mb-6 flex flex-wrap items-center gap-3 rounded-[4px] border border-amber/25 bg-amber/[0.05] px-4 py-3 font-mono text-[11.5px] text-amber/90">
          <TerminalSquare className="h-4 w-4" />
          <span>rate-limited or offline — showing verified cached index</span>
          <button
            type="button"
            onClick={() => setAttempt((a) => a + 1)}
            className="ml-auto inline-flex items-center gap-1.5 rounded-[3px] border border-amber/30 px-2.5 py-1 text-[10.5px] uppercase tracking-wider transition-colors hover:bg-amber hover:text-void"
          >
            <RefreshCw className="h-3 w-3" /> retry
          </button>
        </div>
      )}

      {/* repo grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((r, i) => {
          const dot = LANG_COLORS[r.lang] ?? "#8b949e";
          return (
            <Reveal key={r.name} delay={(i % 3) * 70}>
              <div className="group panel-ridge flex h-full flex-col rounded-[4px] border border-line/80 bg-panel/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cy/35">
                <div className="flex items-start justify-between gap-2">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 truncate font-mono text-[13px] font-semibold text-ink transition-colors hover:text-cy"
                  >
                    {r.name}
                  </a>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${r.name}`}
                    className="shrink-0 text-faint transition-colors hover:text-term"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-dim">{r.desc}</p>

                <div className="mt-3 flex items-center gap-3 font-mono text-[10.5px] text-faint">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ background: dot, boxShadow: `0 0 6px ${dot}` }} />
                    {r.lang}
                  </span>
                  <span className="flex items-center gap-1 text-dim">
                    <Star className="h-3 w-3 text-amber/80" /> {r.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" /> {r.forks}
                  </span>
                  <span className="ml-auto">upd {r.updated}</span>
                </div>

                <div className="mt-3 border-t border-line/50 pt-2.5">
                  <CopyButton text={`git clone https://github.com/${GITHUB_ORG}/${r.name}.git`} label="clone" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Tag tone="term">access: public</Tag>
          <Tag tone="cy">license: ask per repo</Tag>
          <a
            href={PROFILE.links.githubMain}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-[4px] border border-line bg-panel px-4 py-2 font-mono text-[12px]",
              "text-mint transition-colors hover:border-term/50 hover:text-term",
            )}
          >
            view full profile <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
