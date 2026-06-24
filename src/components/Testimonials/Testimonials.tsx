import { T } from '../../tokens';
import { SectionLabel } from '../shared/SectionLabel';
import { TESTIMONIALS } from '../../data';

export function Testimonials() {
  return (
    <section style={{ background: T.cream }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(56px,9vw,110px) clamp(18px,5vw,48px)',
        }}
      >
        <SectionLabel num="06" label="CLIENT TESTIMONIALS" mb="clamp(34px,4vw,50px)" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
            gap: 22,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              style={{
                border: `3px solid ${T.ink}`,
                borderLeft: `10px solid ${t.accent}`,
                boxShadow: `6px 6px 0 ${T.ink}`,
                background: T.white,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontWeight: 900,
                  fontSize: 46,
                  lineHeight: 0.4,
                  height: 24,
                  color: t.accent,
                }}
              >
                "
              </div>
              <p style={{ fontSize: 15.5, lineHeight: 1.55 }}>{t.quote}</p>
              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: 16,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {t.author}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 18,
            fontFamily: "'Space Mono', monospace",
            fontSize: 10.5,
            letterSpacing: 1,
            color: T.muted,
          }}
        >
        </div>
      </div>
    </section>
  );
}
