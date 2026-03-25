import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="border-b border-gray-200 py-20 md:py-36 relative overflow-hidden">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Top row */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-10 fade-up"
          style={{ animationDelay: "1.7s" }}
        >
          <span className="text-sm text-gray-400 uppercase tracking-widest">
            Frontend Developer &amp; Designer
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </div>

        {/* Name — difference blend so it reads on both bg colours */}
        <h1
          className="text-[6rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-light leading-none tracking-tight mb-12 uppercase overflow-hidden"
          style={{ color: "white", mixBlendMode: "difference", position: "relative", zIndex: 50 }}
        >
          <span className="block slide-from-left font-bold">Juno</span>
          <span className="block slide-from-right font-bold">Kim</span>
        </h1>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 fade-up"
          style={{ animationDelay: "2.0s" }}
        >
          <p className="text-xs text-gray-500 leading-relaxed max-w-md whitespace-pre-line">
            <Typewriter
              text={"Building precise, performant digital experiences.\nFocused on clean code, accessibility, and thoughtful design."}
              delay={2.7}
              speed={30}
            />
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-6 py-3 text-xs uppercase tracking-wider self-start sm:self-auto btn-diagonal"
          >
            Contact ↗
          </a>
        </div>
      </div>
    </section>
  );
}
