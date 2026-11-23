// Pure-CSS hero visual used as a fallback when WebGL/Three.js is unavailable
// (e.g. restricted preview iframes). Keeps the cinematic look without a canvas.
export default function HeroFallback() {
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center">
      <div className="relative h-[420px] w-[420px] max-w-[80vw]">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-radial-neon blur-2xl opacity-80" />
        {/* Orbiting rings */}
        <div className="absolute inset-6 rounded-full border border-neon/20 animate-spinSlow" />
        <div
          className="absolute inset-16 rounded-full border border-neon/15 animate-spinSlow"
          style={{ animationDirection: 'reverse' }}
        />
        <div className="absolute inset-28 rounded-full border border-white/10 animate-spinSlow" />
        {/* Core orb */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-44 w-44 rounded-full bg-gradient-to-br from-neon/80 to-neon/20 shadow-neon animate-pulseGlow">
            <div className="absolute inset-3 rounded-full border border-white/30" />
            <div className="absolute inset-0 grid place-items-center font-display text-5xl font-bold text-ink">
              AK
            </div>
          </div>
        </div>
        {/* Floating particles */}
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-neon shadow-[0_0_8px_#C6FF00] animate-floaty"
            style={{
              left: `${10 + ((i * 37) % 80)}%`,
              top: `${10 + ((i * 53) % 80)}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
