export function Logo({ size = 44, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <span className="logo">
      <span className="logo__mark" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="37" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
          <path
            d="M50 33.5 62 42l-4.6 14H42.6L38 42z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M50 36.4v9.4M59 42.6l-5.7 4M56.2 51.8l-4.3-3M43.8 51.8l4.3-3M41 42.6l5.7 4"
            stroke="#07110c"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <text
            x="50"
            y="20.5"
            textAnchor="middle"
            fontSize="12.5"
            fontFamily="Bebas Neue, sans-serif"
            letterSpacing="0.6"
            fill="currentColor"
          >
            GOSHEN
          </text>
          <text
            x="50"
            y="87"
            textAnchor="middle"
            fontSize="12.5"
            fontFamily="Bebas Neue, sans-serif"
            letterSpacing="0.6"
            fill="currentColor"
          >
            XBALLERZ
          </text>
        </svg>
      </span>
      {withText && (
        <span className="logo__word">
          <span className="logo__name">Goshen</span>
          <span className="logo__sub">XBallerz</span>
        </span>
      )}
    </span>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PitchLines({ className = "" }: { className?: string }) {
  return (
    <svg className={`pitch-lines ${className}`} viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="60" y="40" width="1320" height="820" />
        <line x1="720" y1="40" x2="720" y2="860" />
        <circle cx="720" cy="450" r="120" />
        <circle cx="720" cy="450" r="5" fill="currentColor" />
        <rect x="60" y="250" width="180" height="400" />
        <rect x="60" y="345" width="70" height="210" />
        <rect x="1200" y="250" width="180" height="400" />
        <rect x="1310" y="345" width="70" height="210" />
        <path d="M240 330a140 140 0 0 1 0 240" />
        <path d="M1200 330a140 140 0 0 0 0 240" />
        <path d="M60 40h24v24M1380 40h-24v24M60 860h24v-24M1380 860h-24v-24" />
      </g>
    </svg>
  );
}

export function Ball({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M50 28 68 41l-6.8 22H38.8L32 41z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M50 31v15M64 43.5l-9.2 6.4M60 58.5l-6.8-4.8M40 58.5l6.8-4.8M36 43.5l9.2 6.4"
        stroke="#07110c"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M50 3v9M50 88v9M3 50h9M88 50h9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
