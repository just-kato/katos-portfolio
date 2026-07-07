import alexBw from '../../assets/alex-bw.png';
import arrowSvg from '../../assets/arrow.svg';
import { T } from '../../tokens';

const BADGE_SHADOW = `3px 3px 0 ${T.ink}` as const;
const BADGE_BORDER = `3px solid ${T.ink}` as const;
const MONO: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
  fontWeight: 700,
};

const PinIcon = () => (
  <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
    <path
      d="M4.5 0.5C2.29 0.5 0.5 2.29 0.5 4.5C0.5 7.5 4.5 10.5 4.5 10.5C4.5 10.5 8.5 7.5 8.5 4.5C8.5 2.29 6.71 0.5 4.5 0.5Z"
      fill={T.ink}
    />
    <circle cx="4.5" cy="4.5" r="1.5" fill={T.badgePurple} />
  </svg>
);

function HeroBadges() {
  return (
    <>
      {/* 1. AVAILABLE spinning stamp — top-left, ~80px */}
      <div
        className="badge-pop"
        style={{
          position: 'absolute',
          top: -16,
          left: -16,
          zIndex: 4,
          animationDelay: '0s',
          width: 80,
          height: 80,
        }}
      >
        {/* static ink hard-shadow circle — sits behind, does not spin */}
        <div
          style={{
            position: 'absolute',
            top: 4,
            left: 4,
            width: 75,
            height: 75,
            borderRadius: '50%',
            background: T.ink,
            zIndex: 0,
          }}
        />
        {/* spinning stamp — sweep=0 (counter-clockwise) so text reads right-side-up on the top arc */}
        <svg
          className="stamp-spin"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          role="img"
          aria-label="Available for work"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <circle cx="40" cy="40" r="36" fill={T.highlightYellow} stroke={T.ink} strokeWidth="3" />
          <defs>
            <path id="hero-stamp-path" d="M40,40 m-28,0 a28,28 0 1,0 56,0 a28,28 0 1,0 -56,0" />
          </defs>
          <text
            fill={T.ink}
            fontSize="7.5"
            fontFamily="'Space Mono', monospace"
            fontWeight="700"
            letterSpacing="2"
          >
            <textPath href="#hero-stamp-path" startOffset="2%">
              AVAILABLE · FOR WORK ·
            </textPath>
          </text>
          {/* blinking green dot center */}
          <circle
            className="available-dot"
            cx="40" cy="40" r="5"
            fill={T.green} stroke={T.ink} strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* 2. Alexzandra name pill + cursor — top-right */}
      <div
        className="badge-pop"
        style={{
          position: 'absolute',
          top: -14,
          right: -12,
          zIndex: 4,
          animationDelay: '0.15s',
        }}
      >
        <div
          style={{
            position: 'relative',
            background: T.badgePurple,
            border: BADGE_BORDER,
            boxShadow: BADGE_SHADOW,
            borderRadius: 999,
            padding: '5px 14px',
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: T.ink,
            transform: 'rotate(4deg)',
            whiteSpace: 'nowrap',
            display: 'inline-block',
          }}
        >
          Alexzandra

        </div>
      </div>

      {/* 3. GSU '29 — pill, pastel blue, bottom-left, -2deg */}
      <span
        className="badge-pop"
        style={{
          position: 'absolute',
          bottom: 8,
          left: 14,
          zIndex: 4,
          animationDelay: '0.3s',
          background: T.gsuBlue,
          border: BADGE_BORDER,
          boxShadow: BADGE_SHADOW,
          padding: '5px 12px',
          borderRadius: 999,
          ...MONO,
          fontSize: 11,
          letterSpacing: 1,
          color: T.ink,
          transform: 'rotate(-2deg)',
          whiteSpace: 'nowrap',
        }}
      >
        Mortgage Lending
      </span>

      {/* 4. Atlanta, GA — pill, off-white, pin icon, bottom-right, +2deg */}
      <span
        className="badge-pop"
        style={{
          position: 'absolute',
          bottom: 8,
          right: -6,
          zIndex: 4,
          animationDelay: '0.45s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          background: T.badgeOffWhite,
          color: T.ink,
          border: BADGE_BORDER,
          boxShadow: BADGE_SHADOW,
          padding: '5px 10px',
          borderRadius: 999,
          ...MONO,
          fontSize: 10.5,
          transform: 'rotate(2deg)',
          whiteSpace: 'nowrap',
        }}
      >
        <PinIcon />
        Atlanta, GA
      </span>
    </>
  );
}

export function HeroPortrait() {
  return (
    <div style={{ flex: '0 1 320px', minWidth: 248, display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 'min(100%,300px)', aspectRatio: '4/5' }}>

        {/* Photo frame */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: `3px solid ${T.ink}`,
            boxShadow: `12px 13px 0 ${T.ink}`,
            overflow: 'hidden',
            background: T.lavender,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${alexBw})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 22%',
              backgroundSize: 'cover',
            }}
          />
        </div>

        <HeroBadges />

      </div>
    </div>
  );
}
