import { useState } from "react";

const links = ["Services", "Works", "About", "Contact"];

function SunIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75zM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59zM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75zM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591zM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18zM7.166 17.834a.75.75 0 0 0-1.06 1.06l1.59 1.591a.75.75 0 1 0 1.061-1.06l-1.59-1.591zM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12zM6.166 6.166a.75.75 0 0 0 1.06 1.06l1.591-1.59a.75.75 0 1 0-1.061-1.061l-1.59 1.59z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z" />
    </svg>
  );
}

function ThemeSwitch({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative flex items-center text-gray-900 border border-current overflow-hidden"
      style={{ width: 36, height: 18 }}
    >
      {/* Sliding indicator */}
      <span
        className="absolute inset-y-0 bg-current"
        style={{
          width: "50%",
          transform: theme === "light" ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Sun */}
      <span
        className="relative z-10 flex-1 flex items-center justify-center"
        style={{ mixBlendMode: "difference", color: "white" }}
      >
        <SunIcon />
      </span>
      {/* Moon */}
      <span
        className="relative z-10 flex-1 flex items-center justify-center"
        style={{ mixBlendMode: "difference", color: "white" }}
      >
        <MoonIcon />
      </span>
    </button>
  );
}

export default function Navbar({
  theme,
  onToggleTheme,
}: {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-200 fade-up"
      style={{ background: "var(--nav-bg)", animationDelay: "1.6s" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="/"
          className="text-md font-bold tracking-wider uppercase text-gray-900 link-line"
        >
          Juno
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-xs text-gray-400 uppercase tracking-wider hover:text-gray-900 transition-colors link-line"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitch theme={theme} onToggle={onToggleTheme} />
          <button
            className="text-xs text-gray-400 uppercase tracking-wider"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-200">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-4 text-xs text-gray-400 uppercase tracking-wider border-b border-gray-200 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
