import alexBw2 from '../../assets/alex-bw2.png';
import alexBw from '../../assets/alex-bw.png';

import { T } from '../../tokens';

export function HeroPortrait() {
  return (
    <div style={{ flex: '0 1 320px', minWidth: 248, display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 'min(100%,300px)', aspectRatio: '4/5' }}>
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

        <span
          style={{
            position: 'absolute',
            top: -14,
            left: -12,
            zIndex: 4,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            background: T.butter,
            border: `3px solid ${T.ink}`,
            boxShadow: `3px 3px 0 ${T.ink}`,
            padding: '7px 12px',
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
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

        <div
          style={{
            position: 'absolute',
            bottom: -14,
            right: -10,
            zIndex: 4,
            background: T.gsuBlue,
            color: T.ink,
            border: `3px solid ${T.ink}`,
            boxShadow: `3px 3px 0 ${T.ink}`,
            padding: '8px 12px',
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          GSU&nbsp;'29
        </div>
      </div>
    </div>
  );
}
