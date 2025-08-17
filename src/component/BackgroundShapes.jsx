export default function BackgroundShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft vignette */}
      <div className="absolute inset-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)] dark:[background:radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.15),transparent_60%)]" />

      {/* Faint grid */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Back blob */}
      <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-br from-indigo-500/35 via-fuchsia-500/35 to-pink-500/35 motion-safe:animate-[var(--animate-blob)]" />

      {/* Right blob */}
      <div className="absolute -right-16 top-24 h-[22rem] w-[22rem] rounded-full blur-3xl bg-gradient-to-br from-amber-400/30 via-rose-400/30 to-fuchsia-500/30 motion-safe:animate-[var(--animate-blob-slow)]" />

      {/* Bottom-left blob */}
      <div className="absolute left-1/4 -bottom-24 h-[26rem] w-[26rem] rounded-full blur-3xl bg-gradient-to-br from-sky-400/30 via-cyan-400/30 to-teal-400/30 motion-safe:animate-[var(--animate-blob)]" />

      {/* Rotating ring */}
      <div className="absolute right-1/4 top-1/3 h-72 w-72 motion-safe:animate-[var(--animate-slowspin)] [mask-image:radial-gradient(circle,black,transparent_70%)]">
        <div className="h-full w-full rounded-full border border-white/10 dark:border-white/5" />
      </div>

      {/* Floating dot */}
      <div className="absolute left-[12%] top-[38%] h-16 w-16 rounded-full blur-2xl bg-white/40 dark:bg-white/30 opacity-60 motion-safe:animate-[var(--animate-float)]" />

      {/* Horizontal drifter */}
      <div className="absolute right-[8%] bottom-[22%] h-24 w-24 rounded-full blur-2xl bg-white/20 dark:bg-white/10 opacity-60 motion-safe:animate-[var(--animate-float-x)]" />

      {/* Mobile extra blobs */}
      <div className="sm:hidden">
        <div className="absolute -top-16 -left-12 h-72 w-72 rounded-full blur-2xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30" />
        <div className="absolute -right-10 bottom-10 h-60 w-60 rounded-full blur-2xl bg-gradient-to-br from-rose-400/25 to-amber-300/25" />
      </div>

      {/* Center glow pulse */}
      <div className="absolute inset-0 mx-auto my-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_60%)]">
        <div className="mx-auto mt-[15vh] h-64 w-64 rounded-full bg-white/5 blur-2xl motion-safe:animate-[var(--animate-pulse-soft)]" />
      </div>
    </div>
  );
}
