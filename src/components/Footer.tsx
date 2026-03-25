import { useState, useEffect } from "react";
import { useSectionFade } from "../hooks/useSectionFade";
import { SOCIALS } from "../constants";

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
}

export default function Footer() {
  const ref = useSectionFade();
  return (
    <footer ref={ref} id="contact" className="section-reveal">
      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 border-b border-gray-200">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
          Let's work together
        </p>
        <a
          href="mailto:junokimemail@gmail.com"
          className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-900 break-all leading-tight link-line"
        >
          junokimemail@gmail.com
        </a>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs text-gray-400">
          <span>
            Local time — <LocalTime />
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-gray-400">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="hover:text-gray-900 transition-colors link-line"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
