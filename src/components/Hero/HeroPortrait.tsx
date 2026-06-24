import alexBw2 from '../../assets/alex-bw2.png';
import alexBw from '../../assets/alex-bw.png';
import { T } from '../../tokens';

const PinIcon = () => (
  <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden="true">
    <path
      d="M4.5 0.5C2.29 0.5 0.5 2.29 0.5 4.5C0.5 7.5 4.5 10.5 4.5 10.5C4.5 10.5 8.5 7.5 8.5 4.5C8.5 2.29 6.71 0.5 4.5 0.5Z"
      fill={T.darkPurple}
    />
    <circle cx="4.5" cy="4.5" r="1.5" fill={T.lavender} />
  </svg>
);

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="2"   y="9"   width="18" height="12"  rx="1"   fill={T.darkMint} />
    <rect x="5"   y="5"   width="12" height="6"   rx="1"   fill={T.darkMint} />
    <rect x="8"   y="2.5" width="6"  height="4"   rx="1"   fill={T.darkMint} />
    <rect x="4"   y="12"  width="3"  height="2.5" rx="0.5" fill={T.mint} />
    <rect x="9.5" y="12"  width="3"  height="2.5" rx="0.5" fill={T.mint} />
    <rect x="15"  y="12"  width="3"  height="2.5" rx="0.5" fill={T.mint} />
    <rect x="9"   y="15.5" width="4" height="5.5" rx="0.5" fill={T.mint} />
  </svg>
);

const BADGE_SHADOW = '2px 3px 0px rgba(0,0,0,0.15)' as const;
const BADGE_BORDER = `2px solid ${T.ink}` as const;
const MONO: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
  fontWeight: 700,
};

export function HeroPortrait() {
  return (
    <div style={{ flex: '0 1 320px', minWidth: 248, display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 'min(100%,300px)', aspectRatio: '4/5' }}>

        {/* Photo frame — unchanged */}
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

        {/* 1. AVAILABLE — pill, pulsing dot, top-left */}
        <span
          className="badge-pop"
          style={{
            position: 'absolute',
            top: -14,
            left: -12,
            zIndex: 4,
            animationDelay: '0.2s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            background: T.butter,
            border: BADGE_BORDER,
            boxShadow: BADGE_SHADOW,
            padding: '6px 14px',
            borderRadius: 999,
            ...MONO,
            fontSize: 11,
            letterSpacing: 1,
            transform: 'rotate(-2deg)',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            className="available-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: T.green,
              border: `1.5px solid ${T.ink}`,
              flexShrink: 0,
            }}
          />
          AVAILABLE
        </span>

        {/* 2. 10+ yrs with clients — rounded rect, butter, left-center
            transform: translateY+rotate coexists with the scale animation
            because @keyframes badge-pop uses standalone `scale` property */}
        <div
          className="badge-pop"
          style={{
            position: 'absolute',
            top: '50%',
            left: -38,
            zIndex: 4,
            animationDelay: '0.35s',
            background: T.butter,
            border: BADGE_BORDER,
            boxShadow: BADGE_SHADOW,
            padding: '8px 12px',
            borderRadius: 10,
            ...MONO,
            fontSize: 9,
            color: T.ink,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            lineHeight: 1.6,
            transform: 'translateY(-50%) rotate(-3deg)',
          }}
        >
          10+ yrs<br />with clients
        </div>

        {/* 3. GSU '29 — speech bubble pointing up-left, bottom-right */}
        <div
          className="badge-pop badge-speech-bubble"
          style={{
            position: 'absolute',
            bottom: -14,
            right: -10,
            zIndex: 4,
            animationDelay: '0.5s',
            background: T.gsuBlue,
            color: T.ink,
            border: BADGE_BORDER,
            boxShadow: BADGE_SHADOW,
            padding: '8px 14px',
            borderRadius: 8,
            ...MONO,
            fontSize: 11,
            letterSpacing: 1,
            transform: 'rotate(2deg)',
            whiteSpace: 'nowrap',
          }}
        >
          GSU&nbsp;'29
        </div>

        {/* 4. Atlanta, GA — pill, lavender, pin icon, bottom-left */}
        <span
          className="badge-pop"
          style={{
            position: 'absolute',
            bottom: -14,
            left: 16,
            zIndex: 4,
            animationDelay: '0.65s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            background: T.lavender,
            color: T.darkPurple,
            border: BADGE_BORDER,
            boxShadow: BADGE_SHADOW,
            padding: '5px 11px',
            borderRadius: 999,
            ...MONO,
            fontSize: 10,
            transform: 'rotate(-1.5deg)',
            whiteSpace: 'nowrap',
          }}
        >
          <PinIcon />
          Atlanta, GA
        </span>

        {/* 5. Building icon — rounded square card, mint, top-right */}
        <div
          className="badge-pop"
          style={{
            position: 'absolute',
            top: -16,
            right: -16,
            zIndex: 4,
            animationDelay: '0.8s',
            background: T.mint,
            border: BADGE_BORDER,
            boxShadow: BADGE_SHADOW,
            width: 44,
            height: 44,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(4deg)',
          }}
        >
          <BuildingIcon />
        </div>

      </div>
    </div>
  );
}
