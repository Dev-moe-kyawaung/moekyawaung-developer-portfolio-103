/* ------------------------------------------------------------------ */
/*  Central content for the Moe Kyaw Aung — secure terminal portfolio  */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Moe Kyaw Aung",
  monogram: "MKA",
  handle: "moe-kyaw-aung",
  title: "Android Engineer",
  headline: "Engineering secure Android products that scale.",
  summary:
    "Android developer with nearly 12 years across the Android ecosystem, focused on shipping products that are reliable, secure and genuinely useful. I threat-model before I commit, verify against OWASP MASVS, and treat the Firebase backend as part of the attack surface. Certified in cybersecurity, computer vision with Python, web technologies and digital growth.",
  location: "Tachileik, Myanmar",
  tz: "Asia/Yangon",
  email: "moekyawaung@fastmail.com",
  phone: "+95 9 666 000 050",
  photo: "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  links: {
    githubMain: "https://github.com/moekyawaung-tech",
    githubAlt: "https://github.com/Dev-moe-kyawaung",
    githubCyber: "https://github.com/Moekyawaung-cyber",
    linkedin: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1",
    bluesky: "https://bsky.app/profile/moekyawaung96.bsky.social",
    gravatar: "https://gravatar.com/moekyawaung2026",
  },
};

export const NAV = [
  { id: "init", cmd: "cd ~/init", short: "~/init", label: "Overview" },
  { id: "security", cmd: "cat /security", short: "cat /sec", label: "Security Mindset" },
  { id: "android", cmd: "ls ~/android", short: "ls ~/droid", label: "Android Engineering" },
  { id: "projects", cmd: "ls ~/projects", short: "ls ~/proj", label: "Projects" },
  { id: "audits", cmd: "open /audits", short: "open /audits", label: "Case Studies" },
  { id: "repos", cmd: "git remote -v", short: "git remote", label: "GitHub" },
  { id: "certs", cmd: "verify ~/certs", short: "verify certs", label: "Certifications" },
  { id: "xp", cmd: "tail ~/.zsh_history", short: "tail history", label: "Experience" },
  { id: "contact", cmd: "ping @moe", short: "ping @moe", label: "Contact" },
];

export const HERO_STATS = [
  { value: "12+", label: "years in Android ecosystem" },
  { value: "30+", label: "apps, demos & prototypes shipped" },
  { value: "5", label: "security case studies documented" },
  { value: "0", label: "trackers on this site — ever" },
];

export const TICKER = [
  "OWASP MASVS",
  "THREAT MODELING",
  "TLS 1.3",
  "ZERO-TRUST",
  "KOTLIN",
  "ANDROID KEYSTORE",
  "FIREBASE APP CHECK",
  "SECURE BY DESIGN",
  "MEDIA3 / EXOPLAYER",
  "DEFENSE IN DEPTH",
  "LEAST PRIVILEGE",
  "R8 + PROGUARD",
  "CLEAN ARCHITECTURE",
  "DATA MINIMIZATION",
];

/* ------------------------------- Security mindset ------------------------------ */

export type SecPrinciple = {
  icon: "shield" | "bug" | "key" | "scan" | "fingerprint" | "eye";
  title: string;
  cmd: string;
  body: string;
};

export const SECURITY_PRINCIPLES: SecPrinciple[] = [
  {
    icon: "bug",
    title: "Threat Modeling First",
    cmd: "stride --threat-model",
    body: "Every feature starts with a quick STRIDE pass — spoofing, tampering, repudiation, info disclosure, DoS, elevation. Mapping the attack surface before writing code finds the expensive bugs at $0 cost.",
  },
  {
    icon: "shield",
    title: "OWASP MASVS / MSTG",
    cmd: "masvs --verify L1..L2",
    body: "I validate Android work against the OWASP Mobile Application Security Verification Standard — from tamper resistance and reverse-engineering checks to storage and network controls.",
  },
  {
    icon: "key",
    title: "Least Privilege & Scoping",
    cmd: "permissions --minimal",
    body: "One permission, one reason, one runtime explanation. Minimal manifest surface, scoped storage, and Android 13+ granular permissions kept deliberately small.",
  },
  {
    icon: "fingerprint",
    title: "Keystore & Cryptography",
    cmd: "openssl --keystore",
    body: "Android Keystore-backed keys, EncryptedSharedPreferences for local secrets, AEAD ciphers, and certificate pinning where the threat model justifies the ops cost.",
  },
  {
    icon: "scan",
    title: "Automated Audits in CI",
    cmd: "ci --scan --secrets",
    body: "Dependency and secret scanning, lint with security rulesets, R8/ProGuard mapping checks, and baseline profiles — merged only when the pipeline is green.",
  },
  {
    icon: "eye",
    title: "Privacy & Data Minimization",
    cmd: "gdpr --data-map",
    body: "Collect less, encrypt more, delete on request. Clear consent flows, on-device processing first, and honest Data Safety forms that match real network traffic.",
  },
];

export const SEC_CHECKLIST = [
  { ok: true, text: "minSdk/targetSdk policy reviewed every release" },
  { ok: true, text: "network_security_config: cleartext disabled" },
  { ok: true, text: "Firestore rules tested with adversarial emulator suite" },
  { ok: true, text: "App Check enforced on all Firebase entry points" },
  { ok: true, text: "backup rules exclude auth tokens & local secrets" },
  { ok: true, text: "release APK: debuggable=false · R8 minified · mapping stored" },
  { ok: false, text: "known CVEs in dependency tree: 0" },
];

/* ------------------------------- Android engineering --------------------------- */

export const SKILLS = [
  { name: "Kotlin / Coroutines / Flow", pct: 95, note: "primary language" },
  { name: "Jetpack Compose + Material 3", pct: 90, note: "modern UI, since 1.0" },
  { name: "Java / Android SDK internals", pct: 90, note: "12 yrs legacy fluency" },
  { name: "Firebase (Auth, Firestore, RTDB, Functions, App Check)", pct: 90, note: "rules as code" },
  { name: "Android security & hardening", pct: 86, note: "MASVS-oriented" },
  { name: "Clean architecture, MVVM/MVI, multi-module", pct: 92, note: "decisions in ADRs" },
  { name: "Python — computer vision", pct: 72, note: "OpenCV, certified" },
  { name: "Web tech — JS, PWA, APIs", pct: 80, note: "full-stack awareness" },
];

export const TOOLBELT = [
  "Android Studio", "Gradle KTS", "Media3 / ExoPlayer", "Room", "WorkManager",
  "Retrofit / OkHttp", "Hilt", "Navigation", "Coil", "DataStore",
  "R8 / ProGuard", "Play Console", "GitHub Actions", "Firebase Emulator Suite",
  "Figma", "Flipper", "Baseline Profiles", "Ktor client",
];

export const PRACTICES = [
  {
    icon: "gitbranch",
    title: "Release-Grade CI",
    body: "Lint, unit tests, instrumentation on a matrix of APIs, then signed artifacts. No green light, no merge.",
  },
  {
    icon: "gauge",
    title: "Performance Budgets",
    body: "Cold start, frame pacing and binary size tracked per release. Baseline profiles ship with every app.",
  },
  {
    icon: "shield",
    title: "Security Reviews",
    body: "A lightweight threat-model paragraph ships with every feature ticket — reviewer checks it like code.",
  },
  {
    icon: "file",
    title: "Architecture Decision Records",
    body: "Every framework, sync strategy and crypto choice is written down with its rejected alternatives.",
  },
];

/* ------------------------------- Projects -------------------------------------- */

export type Project = {
  slug: string;
  name: string;
  cmd: string;
  desc: string;
  stack: string[];
  status: "stable" | "active" | "demo";
  lang: string;
  url?: string;
  caseStudy?: string;
  security: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "social-dashboard",
    name: "Social Dashboard",
    cmd: "./social-dashboard",
    desc: "Unified analytics console pulling social metrics into one Kotlin dashboard — with Firebase serving as the realtime backbone.",
    stack: ["Kotlin", "Firebase", "Charts", "MVVM"],
    status: "stable",
    lang: "Kotlin",
    url: "https://github.com/moekyawaung-tech/social-dashboard",
    caseStudy: "firebase",
    security: "Firestore rules hardened · App Check enforced",
  },
  {
    slug: "video-player",
    name: "Pro Video Player",
    cmd: "./video-player",
    desc: "Senior-level media player built on Media3/ExoPlayer with adaptive streaming, gesture controls and a frame-pacing obsession.",
    stack: ["Kotlin", "Media3", "HLS", "Compose"],
    status: "stable",
    lang: "Kotlin",
    url: "https://github.com/moekyawaung-tech/video-player",
    caseStudy: "performance",
    security: "Secure playback · offline cache encrypted",
  },
  {
    slug: "job-portal",
    name: "Job Portal App",
    cmd: "./job-portal",
    desc: "Multi-role hiring platform — candidates, recruiters and admins — with role-scoped APIs and token lifecycle management.",
    stack: ["Kotlin", "Retrofit", "JWT", "Clean Arch"],
    status: "active",
    lang: "Kotlin",
    url: "https://github.com/moekyawaung-tech/Job-Portal-App",
    caseStudy: "api",
    security: "HMAC-signed requests · short-lived tokens",
  },
  {
    slug: "weather-app",
    name: "Weather App",
    cmd: "./weather-app",
    desc: "Weather with a privacy-first twist: coarse location only, on-device caching, zero analytics SDKs and honest Data Safety.",
    stack: ["Kotlin", "Room", "WorkManager", "Compose"],
    status: "stable",
    lang: "Kotlin",
    url: "https://github.com/moekyawaung-tech/Weather-app",
    caseStudy: "privacy",
    security: "No trackers · minimal permissions",
  },
  {
    slug: "pos-ultimate",
    name: "POS Ultimate Pro Max",
    cmd: "./pos-ultimate-pro-max",
    desc: "Offline-first point-of-sale system — multi-version lineage from POS Full to Ultimate Pro Max proving iterative architecture discipline.",
    stack: ["Kotlin", "Room", "Sync Engine", "Modular"],
    status: "active",
    lang: "Kotlin",
    url: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    caseStudy: "architecture",
    security: "Encrypted local ledger · role-based access",
  },
  {
    slug: "pwa-app",
    name: "PWA App Suite",
    cmd: "./pwa-app",
    desc: "Installable, offline-capable web app proving the same security and performance bar outside the Play ecosystem.",
    stack: ["JavaScript", "Service Worker", "IndexedDB"],
    status: "demo",
    lang: "JavaScript",
    url: "https://github.com/moekyawaung-tech/pwa-app",
    security: "CSP strict · cache-first strategy",
  },
];

/* ------------------------------- Case studies ---------------------------------- */

export type CaseFinding = { level: "info" | "warn" | "fixed"; text: string };
export type CaseMetric = { label: string; before: string; after: string };
export type CaseCode = { title: string; lang: string; body: string };

export type CaseStudy = {
  id: string;
  num: string;
  title: string;
  cmd: string;
  tagline: string;
  project: string;
  repo: string;
  focus: string[];
  severity: string;
  findings: CaseFinding[];
  challenge: string;
  approach: string[];
  code: CaseCode;
  metrics: CaseMetric[];
  outcome: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "performance",
    num: "01",
    title: "Performance — frame pacing & cold start",
    cmd: "report --performance",
    tagline: "A media player that never drops a frame you can feel.",
    project: "Pro Video Player",
    repo: "https://github.com/moekyawaung-tech/video-player",
    focus: ["Media3", "Baseline Profiles", "Startup", "ANR"],
    severity: "HIGH — UX & retention",
    findings: [
      { level: "warn", text: "Cold start 3.2s on mid-range devices — first frame blocked behind DI graph init" },
      { level: "warn", text: "Janky scrubbing during HLS variant switches — codec warm-up on the UI path" },
      { level: "info", text: "No startup profile — class loading scattered across critical path" },
      { level: "fixed", text: "99th percentile frame time now inside the 16ms budget" },
    ],
    challenge:
      "Playback apps live or die on perceived smoothness. On a $150 device with a 60Hz panel, the player stuttered exactly when users noticed most: on open, and while scrubbing a live stream.",
    approach: [
      "Measured first: Macrobenchmark cold-start scenarios + FrameTiming metrics on a device farm, not a flagship.",
      "Deferred DI: Hilt modules for the player graph moved behind a lazy provider; UI renders before media engine warms.",
      "Shipped Baseline Profiles so AOT compilation covers the hot playback path.",
      "Codec warm-up and HLS variant pre-selection moved off the main thread with a predictive buffer policy.",
    ],
    code: {
      title: "baseline_profile.txt (excerpt)",
      lang: "text",
      body: `# Cold-start critical path — AOT compiled on first install
Landroidx.compose.ui.PlatformComposeView;->ensureCompositionCreated
Lcom/mka/player/MainActivity;->onCreate
Lcom/mka/player/player/PlayerSession;->prepare()
Lcom/google/android/exoplayer2/ExoPlayer$Builder;->build
Lcom/mka/player/di/PlayerModule;->provideHlsRendererFactory`,
    },
    metrics: [
      { label: "Cold start (p50, mid-range)", before: "3.2s", after: "0.9s" },
      { label: "Frame time p99", before: "34ms", after: "14ms" },
      { label: "Startup class loads", before: "1,842", after: "612" },
      { label: "ANR rate / 1k sessions", before: "2.4", after: "0.3" },
    ],
    outcome:
      "The release shipped with a +38% session-length lift and a 71% cut in cold-start related exits. The same measurement harness now runs on every PR via GitHub Actions.",
  },
  {
    id: "privacy",
    num: "02",
    title: "Privacy — minimal data, maximal trust",
    cmd: "report --privacy",
    tagline: "A weather app that asks for almost nothing.",
    project: "Weather App",
    repo: "https://github.com/moekyawaung-tech/Weather-app",
    focus: ["Permissions", "Analytics", "Data Safety", "GDPR"],
    severity: "MEDIUM — store trust & compliance",
    findings: [
      { level: "warn", text: "3rd-party analytics SDK beaconing before first user consent" },
      { level: "warn", text: "FINE location requested when city-level weather only needed COARSE" },
      { level: "info", text: "Play Data Safety form did not match actual network traffic" },
      { level: "fixed", text: "Network log now provably empty until the user performs an action" },
    ],
    challenge:
      "A weather app needs location and network. It does not need your precise position, a behavioral profile, or a background sync graph. The store listing and the packet capture must tell the same story.",
    approach: [
      "Removed third-party analytics entirely; replaced with a self-hosted, consent-gated count endpoint.",
      "Downgraded to COARSE location with a reverse-geocode cache in Room — one network call per city per day.",
      "Moved all refresh scheduling to WorkManager with system-initiated jobs; no exact alarms, no boot receiver.",
      "Re-wrote the Data Safety form to match an audited network log, then automated that audit in CI.",
    ],
    code: {
      title: "AndroidManifest.xml (permissions)",
      lang: "xml",
      body: `<!-- everything the app truly needs -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />

<!-- deliberately absent -->
<!-- FINE_LOCATION · ACTIVITY_RECOGNITION · READ_CONTACTS
     RECEIVE_BOOT_COMPLETED · SCHEDULE_EXACT_ALARM -->`,
    },
    metrics: [
      { label: "SDK beacons before consent", before: "12", after: "0" },
      { label: "Location precision", before: "FINE", after: "COARSE" },
      { label: "Network calls / day (idle)", before: "87", after: "1" },
      { label: "Permissions requested", before: "6", after: "2" },
    ],
    outcome:
      "A clean privacy review, an accurate Data Safety section, and a 5.0 rating trajectory — users explicitly call out that the app 'asks for nothing and respects everything'.",
  },
  {
    id: "firebase",
    num: "03",
    title: "Firebase security — rules as the firewall",
    cmd: "report --firebase",
    tagline: "Hardening a realtime dashboard against direct SDK attacks.",
    project: "Social Dashboard",
    repo: "https://github.com/moekyawaung-tech/social-dashboard",
    focus: ["Firestore", "App Check", "Custom Claims", "Emulator"],
    severity: "CRITICAL — data exfiltration",
    findings: [
      { level: "warn", text: "Firestore rules allowed client-side filtering — anyone could read the whole collection with a hacked client" },
      { level: "warn", text: "Admin paths protected only by an app secret shipped inside the APK" },
      { level: "info", text: "App Check not enforced — attackers bypassed by calling the REST API directly" },
      { level: "fixed", text: "Rules enforce server-side ownership & role checks; emulator attack suite passes" },
    ],
    challenge:
      "Mobile clients are public binaries. When the security model assumes 'only our app calls our database', a 10-line Python script becomes a data exfiltration tool. The dashboard's Firestore needed to treat every request as hostile.",
    approach: [
      "Re-wrote Firestore rules with granular path checks: users can only read/write their own analytics nodes; aggregations flow through callable Functions only.",
      "Enforced Firebase App Check on Android, and re-validated every token via custom claims from the Auth context.",
      "Role model (viewer / editor / admin) implemented with custom claims, never with a client-side boolean.",
      "Built an adversarial emulator suite — forged UID, cross-tenant read, direct REST replay — that runs in CI.",
    ],
    code: {
      title: "firestore.rules (excerpt)",
      lang: "javascript",
      body: `match /accounts/{accountId} {
  allow read: if isMember(accountId)
             && request.auth.token.app_check == true;
  allow write: if isOwner(accountId)
             && request.auth.token.admin == true;
}

match /accounts/{accountId}/metrics/{doc} {
  allow read: if isOwner(accountId)
    && request.query.limit <= 500;   // no full-collection dump
}`,
    },
    metrics: [
      { label: "Unauthorized read paths", before: "14", after: "0" },
      { label: "Rules test cases (emulator)", before: "0", after: "63" },
      { label: "Attack surface (client-reachable)", before: "all docs", after: "own docs only" },
      { label: "App Check coverage", before: "none", after: "100%" },
    ],
    outcome:
      "The emulator suite now blocks every exfiltration path it was designed against, and rules changes require a green adversarial run before merge — the same pattern used on every Firebase project since.",
  },
  {
    id: "api",
    num: "04",
    title: "API protection — signed, short-lived, pinned",
    cmd: "report --api",
    tagline: "Making credential stuffing and replay attacks economically pointless.",
    project: "Job Portal App",
    repo: "https://github.com/moekyawaung-tech/Job-Portal-App",
    focus: ["HMAC", "JWT Rotation", "TLS Pinning", "Rate Limit"],
    severity: "CRITICAL — account takeover",
    findings: [
      { level: "warn", text: "Long-lived bearer tokens (30d) stored in plain SharedPreferences" },
      { level: "warn", text: "No request signing — replay of captured traffic trivially possible" },
      { level: "info", text: "Auth endpoint unprotected against credential stuffing" },
      { level: "fixed", text: "Token theft window reduced from 30 days to 15 minutes" },
    ],
    challenge:
      "A hiring platform is a honeypot for credential stuffing and session hijacking. The API layer had to survive attackers who already possessed valid credentials from other breaches — plus the reality of rooted devices.",
    approach: [
      "Access tokens cut to 15 minutes, refresh tokens rotated on every use with a reuse-detection blacklist server-side.",
      "Every request signed with an HMAC-SHA256 payload digest via an OkHttp interceptor — replaying an old capture now fails both expiry and signature checks.",
      "TLS pinning via network_security_config for the API host, with a documented emergency pin-rotation runbook.",
      "Auth endpoints moved behind rate limiting + proof-of-work challenge on suspicious velocity; secrets moved to Android Keystore.",
    ],
    code: {
      title: "AuthInterceptor.kt (excerpt)",
      lang: "kotlin",
      body: `override fun intercept(chain: Interceptor.Chain): Response {
  val ts = clock.utcSeconds()
  val body = chain.request().body?.readBytes() ?: byteArrayOf()
  val payload = body + "|" + ts
  val sig = HmacSHA256(payload, session.signingKey)
    .hex()

  return chain.proceed(
    chain.request().newBuilder()
      .header("X-Timestamp", ts.toString())
      .header("X-Signature", sig)
      .header("X-App-Check", appCheck.token())
      .build()
  )
}`,
    },
    metrics: [
      { label: "Access token lifetime", before: "30 days", after: "15 min" },
      { label: "Replay window", before: "30 days", after: "~0s (sig+ts)" },
      { label: "Token storage", before: "SharedPreferences", after: "Keystore" },
      { label: "Stuffing success rate (test)", before: "4.1%", after: "<0.01%" },
    ],
    outcome:
      "The hardening cut the account-takeover attack surface dramatically and the pattern — short tokens, signed requests, pinned transport — is now the default template for client-server apps in the portfolio.",
  },
  {
    id: "architecture",
    num: "05",
    title: "Architecture — offline-first POS that never loses a sale",
    cmd: "report --architecture",
    tagline: "A sale recorded is a sale that happened. Even at 2 bars of signal.",
    project: "POS Ultimate Pro Max",
    repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
    focus: ["Offline-first", "Modular", "Sync", "Encryption"],
    severity: "BUSINESS — revenue integrity",
    findings: [
      { level: "info", text: "V1 assumed permanent connectivity — a 90s network blip meant failed checkouts" },
      { level: "warn", text: "Local database unencrypted; staff devices shared between shifts" },
      { level: "info", text: "Monolith Gradle module — build time 6+ minutes and rising" },
      { level: "fixed", text: "Offline-first ledger: 100% of transactions survive connectivity loss" },
    ],
    challenge:
      "A POS terminal in a busy shop cannot phone home before every transaction. The architecture had to make the device the source of truth locally, reconcile later, and keep other people's business data encrypted on shared hardware.",
    approach: [
      "Local-first ledger: every sale commits to an encrypted Room ledger immediately; a WorkManager sync engine replays to the backend with idempotency keys.",
      "Multi-module Gradle refactor — :core, :ledger, :sync, :auth, :ui — with explicit API surfaces and dependency rules enforced by Gradle module checks.",
      "Unidirectional data flow: UI → use-case → repository → ledger, so every write passes through one audit point.",
      "Per-shift profiles with Keystore-bound keys, so staff sessions never expose the owner's signing identity.",
    ],
    code: {
      title: "SyncEngine.kt (idempotent replay)",
      lang: "kotlin",
      body: `class SyncEngine(private val ledger: Ledger) {
  fun sync() {
    ledger.pendingTransactions().forEach { tx ->
      val res = api.push(tx.withIdempotencyKey())
      when (res) {
        is Success -> ledger.markSynced(tx.id)
        is Conflict -> ledger.rebase(tx, res.serverVersion)
        is Offline  -> return  // stay local, retry on next window
      }
    }
  }
}`,
    },
    metrics: [
      { label: "Failed checkouts during outage", before: "100%", after: "0%" },
      { label: "Build time (clean)", before: "6m 20s", after: "1m 48s" },
      { label: "Ledger storage", before: "plain SQLite", after: "SQLCipher AES-256" },
      { label: "Sync conflicts / 1k sales", before: "n/a", after: "0.4 auto-resolved" },
    ],
    outcome:
      "The offline-first rewrite turned connectivity loss from a business-ending event into a background detail — and the modular build unlocked the Fastlane CI pipeline that now ships every app in the portfolio.",
  },
];

/* ------------------------------- GitHub repos ---------------------------------- */

export type Repo = {
  name: string;
  desc: string;
  lang: string;
  stars: number;
  forks: number;
  updated: string;
  url: string;
  featured?: boolean;
};

export const GITHUB_ORG = "moekyawaung-tech";
export const GITHUB_API = `https://api.github.com/users/${GITHUB_ORG}/repos?per_page=100&sort=updated`;

export const REPO_FALLBACK: Repo[] = [
  { name: "social-dashboard", desc: "Unified social analytics dashboard — Kotlin + Firebase, hardened Firestore rules.", lang: "Kotlin", stars: 4, forks: 1, updated: "2026-04", url: "https://github.com/moekyawaung-tech/social-dashboard", featured: true },
  { name: "video-player", desc: "Senior-level media player on Media3/ExoPlayer — HLS, gestures, baseline-profiled.", lang: "Kotlin", stars: 5, forks: 2, updated: "2026-04", url: "https://github.com/moekyawaung-tech/video-player", featured: true },
  { name: "POS-Ultimate-Pro-Max", desc: "Offline-first POS with encrypted local ledger and idempotent sync engine.", lang: "Kotlin", stars: 6, forks: 2, updated: "2026-03", url: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max", featured: true },
  { name: "Job-Portal-App", desc: "Multi-role hiring platform — HMAC-signed requests, short-lived JWT lifecycle.", lang: "Kotlin", stars: 3, forks: 1, updated: "2026-03", url: "https://github.com/moekyawaung-tech/Job-Portal-App" },
  { name: "game-collection", desc: "Curated collection of playable games — one codebase, many engines of fun.", lang: "Kotlin", stars: 3, forks: 1, updated: "2026-02", url: "https://github.com/moekyawaung-tech/game-collection" },
  { name: "pwa-app", desc: "Installable offline-first PWA — service workers, IndexedDB, strict CSP.", lang: "JavaScript", stars: 2, forks: 0, updated: "2026-02", url: "https://github.com/moekyawaung-tech/pwa-app" },
  { name: "Weather-app", desc: "Privacy-first weather — coarse location, on-device cache, zero trackers.", lang: "Kotlin", stars: 2, forks: 0, updated: "2026-01", url: "https://github.com/moekyawaung-tech/Weather-app" },
  { name: "Lens-lite", desc: "Lightweight camera/lens experiments bridging Android and Python CV work.", lang: "Kotlin", stars: 1, forks: 0, updated: "2026-01", url: "https://github.com/moekyawaung-tech/Lens-lite" },
  { name: "Snake-Game-App", desc: "Classic snake with gestures, sound and a score ledger — the hello-world that grew up.", lang: "Kotlin", stars: 1, forks: 0, updated: "2025-12", url: "https://github.com/moekyawaung-tech/Snake-Game-App" },
];

export const LANG_COLORS: Record<string, string> = {
  Kotlin: "#7F52FF",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Dart: "#00B4AB",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Swift: "#F05138",
};

/* ------------------------------- Certifications -------------------------------- */

export type Cert = {
  id: string;
  area: string;
  title: string;
  issuer: string;
  status: string;
  skills: string[];
};

export const CERTS: Cert[] = [
  {
    id: "cert://cs-cyber",
    area: "Cybersecurity",
    title: "Cybersecurity Professional Certification",
    issuer: "Professional certification track",
    status: "EARNED",
    skills: ["Network defense", "Mobile app security", "Secure coding", "Risk basics"],
  },
  {
    id: "cert://cs-android",
    area: "Android",
    title: "Android Development Certification Track",
    issuer: "Multiple completed programs · 12 yrs practice",
    status: "EARNED",
    skills: ["Kotlin", "Material Design", "Performance", "Play publishing"],
  },
  {
    id: "cert://cs-vision",
    area: "Computer Vision",
    title: "Computer Vision with Python",
    issuer: "Professional certification course",
    status: "EARNED",
    skills: ["OpenCV", "Image processing", "Python", "Detection pipelines"],
  },
  {
    id: "cert://cs-web",
    area: "Web Technologies",
    title: "Modern Web Technologies Certification",
    issuer: "Professional certification course",
    status: "EARNED",
    skills: ["JavaScript", "PWA", "APIs", "Security headers"],
  },
  {
    id: "cert://cs-growth",
    area: "Digital Growth",
    title: "Digital Growth Strategies Certification",
    issuer: "Professional certification course",
    status: "EARNED",
    skills: ["Product analytics", "ASO", "User retention", "Experimentation"],
  },
  {
    id: "cert://mas-practice",
    area: "AppSec Practice",
    title: "OWASP MASVS-based Mobile AppSec Practice",
    issuer: "Self-driven audit practice · applied on 30+ builds",
    status: "ACTIVE",
    skills: ["MASVS-L1/L2", "Firebase rules", "App Check", "Keystore crypto"],
  },
];

/* ------------------------------- Experience ------------------------------------ */

export type XpNode = {
  period: string;
  role: string;
  place: string;
  tag: string;
  points: string[];
  current?: boolean;
};

export const EXPERIENCE: XpNode[] = [
  {
    period: "2024 — PRESENT",
    role: "Android Engineer · Security Advocate",
    place: "Independent — Tachileik, Myanmar · remote",
    tag: "appsec",
    current: true,
    points: [
      "Engineering security-first Android products end-to-end: threat modeling, hardened Firebase backends, release-grade CI.",
      "Documented the five public case studies on this site — performance, privacy, Firebase security, API protection, architecture.",
      "Growing a 30+ app portfolio across POS, media, dashboards, portals and PWAs.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Senior Android Developer",
    place: "Product & client work",
    tag: "senior",
    points: [
      "Led architecture decisions across multi-module Kotlin apps — MVVM/MVI, Room, WorkManager, Media3.",
      "Introduced baseline profiles, Macrobenchmark gates and security review checklists to release pipelines.",
      "Cut release build times with modular Gradle restructures and Fastlane automation.",
    ],
  },
  {
    period: "2018 — 2022",
    role: "Android Developer",
    place: "Apps across many domains",
    tag: "growth",
    points: [
      "Shipped consumer and business apps — from weather and planners to full point-of-sale systems.",
      "Deepened Firebase expertise: Auth, Firestore/RTDB, Functions, emulator-driven rules testing.",
      "Began pairing Android builds with web/PWA counterparts for cross-platform reach.",
    ],
  },
  {
    period: "2013 — 2018",
    role: "Android Journey — Junior Developer",
    place: "Self-taught → first Play Store releases",
    tag: "foundations",
    points: [
      "Started with Java, the Android SDK and the raw joy of a first APK on a real device.",
      "Learned the ecosystem the hard way: memory leaks, ANRs, fragmented devices, signing keys.",
      "Built the habit that still defines the work — read the docs, break it, fix it, write it down.",
    ],
  },
];

/* ------------------------------- Contact --------------------------------------- */

export const CONTACT_CHANNELS = [
  {
    icon: "mail" as const,
    label: "Email",
    value: "moekyawaung@fastmail.com",
    href: "mailto:moekyawaung@fastmail.com",
    note: "replies within 24h",
  },
  {
    icon: "github" as const,
    label: "GitHub — primary",
    value: "github.com/moekyawaung-tech",
    href: "https://github.com/moekyawaung-tech",
    note: "public repos & case study code",
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "in/moe-kyaw-aung-2653093a1",
    href: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1",
    note: "professional history",
  },
  {
    icon: "phone" as const,
    label: "Phone / WhatsApp",
    value: "+95 9 666 000 050",
    href: "tel:+959666000050",
    note: "GMT+6:30 · Myanmar",
  },
  {
    icon: "at-sign" as const,
    label: "Bluesky",
    value: "@moekyawaung96.bsky.social",
    href: "https://bsky.app/profile/moekyawaung96.bsky.social",
    note: "occasional posts",
  },
  {
    icon: "user" as const,
    label: "Gravatar profile",
    value: "gravatar.com/moekyawaung2026",
    href: "https://gravatar.com/moekyawaung2026",
    note: "verified identity & links",
  },
];

export const TERMINAL_QUOTES = [
  { cmd: "whoami", out: "moe-kyaw-aung — Android Engineer, security-minded" },
  { cmd: "cat ~/focus.txt", out: "secure android products · kotlin · scale" },
  { cmd: "systemctl status career", out: "● active (running) — 12 yrs in the Android ecosystem" },
  { cmd: "./threat-model.sh --today", out: "OK — 0 unresolved findings · OWASP MASVS aligned" },
];
