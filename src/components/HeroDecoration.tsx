export default function HeroDecoration() {
  const cols = 7
  const rows = 9
  const spacing = 32
  const ox = 12  // grid origin x
  const oy = 14  // grid origin y

  return (
    <svg
      viewBox="0 0 240 296"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden
    >
      {/* Dot grid */}
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={ox + c * spacing}
            cy={oy + r * spacing}
            r={1.5}
            fill="#e5e7eb"
          />
        ))
      )}

      {/* Large outer circle */}
      <circle cx="120" cy="148" r="108" stroke="#0a0a0a" strokeWidth="0.75" />

      {/* Inner dashed ring */}
      <circle
        cx="120" cy="148" r="62"
        stroke="#0a0a0a" strokeWidth="0.5"
        strokeDasharray="3 6" opacity="0.4"
      />

      {/* Axis lines */}
      <line x1="12"  y1="148" x2="228" y2="148" stroke="#0a0a0a" strokeWidth="0.4" opacity="0.2" />
      <line x1="120" y1="40"  x2="120" y2="256" stroke="#0a0a0a" strokeWidth="0.4" opacity="0.2" />

      {/* Cardinal tick dots on outer ring */}
      <circle cx="120" cy="40"  r="3" fill="#0a0a0a" />  {/* top    */}
      <circle cx="228" cy="148" r="3" fill="#0a0a0a" />  {/* right  */}
      <circle cx="120" cy="256" r="3" fill="#0a0a0a" />  {/* bottom */}
      <circle cx="12"  cy="148" r="3" fill="#0a0a0a" />  {/* left   */}

      {/* Centre dot */}
      <circle cx="120" cy="148" r="2.5" fill="#0a0a0a" />

      {/* Filled accent circle — upper-right quadrant */}
      <circle cx="168" cy="100" r="22" fill="#0a0a0a" />

      {/* Hollow accent circle — lower-left quadrant */}
      <circle cx="76" cy="200" r="14" stroke="#0a0a0a" strokeWidth="1" />

      {/* Bold arc — top-to-right quarter of inner ring */}
      <path
        d="M 120 86 A 62 62 0 0 1 182 148"
        stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round"
      />

      {/* Labels */}
      <text x="12"  y="286" fontSize="7" fontFamily="monospace" fill="#9ca3af" letterSpacing="1.5">PORTFOLIO</text>
      <text x="172" y="286" fontSize="7" fontFamily="monospace" fill="#9ca3af">2024</text>
    </svg>
  )
}
