import { T } from '../../tokens';

export function HeroPitch() {
  return (
    <div style={{ flex: '1 1 420px', minWidth: 0, paddingTop: 'clamp(34px, 4.5vw, 54px)' }}>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 12.5,
          fontWeight: 700,
          letterSpacing: 3,
          color: T.mutedBrown,
          marginBottom: 16,
        }}
      >
        REAL ESTATE · CLIENT-FACING · ATLANTA, GA
      </div>

      <h1
        style={{
          fontWeight: 800,
          fontSize: 'clamp(28px, 4vw, 48px)',
          lineHeight: 1.05,
          letterSpacing: -1,
          maxWidth: 520,
          margin: 0,
        }}
      >
        Put me in front of your<br />
        <span style={{ position: 'relative', display: 'inline-block', zIndex: 0 }}>
          <svg
            aria-hidden="true"
            viewBox="0 0 100 26"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              top: '-14%',
              left: '-3%',
              width: '106%',
              height: '128%',
              overflow: 'visible',
              pointerEvents: 'none',
              zIndex: -1,
            }}
          >
            <path
              d="M 2,12 C 18,9 34,14 52,11 C 69,13 83,9 98,12"
              fill="none"
              stroke="rgba(255,228,77,0.7)"
              strokeWidth="15"
              strokeLinecap="round"
              className="clients-highlight"
            />
            <path
              d="M 1,23 C 22,21 48,24 72,22 C 85,23 93,21 99,22"
              fill="none"
              stroke="#161310"
              strokeWidth="2"
              strokeLinecap="round"
              className="clients-underline"
            />
          </svg>
          clients
        </span>
        .
      </h1>

      <p
        style={{
          marginTop: 'clamp(18px, 2.2vw, 24px)',
          fontSize: 'clamp(15px, 1.5vw, 18px)',
          lineHeight: 1.62,
          maxWidth: 500,
          color: T.body,
        }}
      >
        Caring about the person in front of you isn't a soft skill, it's the whole job. I read what
        someone actually needs and make it work with what's available. Every person I work with leaves
        feeling heard, and better off than when they came in.
      </p>

      <div
        style={{
          marginTop: 'clamp(24px, 3vw, 32px)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 14,
        }}
      >
        <a
          href="#contact"
          className="cta-ink"
          style={{
            textDecoration: 'none',
            background: T.ink,
            color: T.cream,
            border: `3px solid ${T.ink}`,
            boxShadow: `5px 5px 0 ${T.lavender}`,
            padding: '14px 26px',
            fontFamily: "'Space Mono', monospace",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Get in touch →
        </a>
        <a
          href="alexzandra_hernandez_resume.pdf"
          download
          className="cta-cream"
          style={{
            textDecoration: 'none',
            background: T.white,
            color: T.ink,
            border: `3px solid ${T.ink}`,
            boxShadow: `5px 5px 0 ${T.ink}`,
            padding: '14px 26px',
            fontFamily: "'Space Mono', monospace",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Download résumé ↓
        </a>
      </div>
    </div>
  );
}
