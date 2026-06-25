import { T } from '../../tokens';

const LINKS = [
  {
    label: 'alexzandra.hernandez@proton.me',
    href: 'mailto:alexzandra.hernandez@proton.me',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alexzandra-hernandez-92b1801ab/',
    external: true,
  },
  {
    label: 'Back to top ↑',
    href: '#top',
  },
];

export function Footer() {
  return (
    <footer style={{ background: T.ink, color: T.sand, borderTop: `4px solid ${T.lavender}` }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(48px,7vw,80px) clamp(18px,5vw,48px) clamp(28px,4vw,40px)',
        }}
      >
        {/* Main row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(36px,6vw,64px)',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Identity */}
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            <div
              style={{
                fontWeight: 900,
                fontSize: 'clamp(26px,3.5vw,38px)',
                letterSpacing: -1,
                lineHeight: 1,
              }}
            >
              Alexzandra Hernandez
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                color: T.muted,
                marginTop: 10,
                textTransform: 'uppercase',
              }}
            >
              Atlanta, GA · Real Estate & Finance
            </div>
            <p
              style={{
                marginTop: 18,
                fontSize: 14,
                lineHeight: 1.6,
                color: '#9b9486',
                maxWidth: 360,
              }}
            >
              Open to customer-facing roles in real estate, leasing, mortgage, and banking.
            </p>
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              paddingTop: 4,
            }}
          >
            {LINKS.map(({ label, href, external }) => (
              <a
                key={href}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  fontWeight: 700,
                  color: T.lavender,
                  textDecoration: 'none',
                  padding: '8px 0',
                  borderBottom: `1px solid rgba(196,161,255,0.15)`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 32,
                  letterSpacing: 0.3,
                }}
              >
                {label}
                <span style={{ opacity: 0.5, fontSize: 10 }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: 'clamp(36px,5vw,56px)',
            paddingTop: 20,
            borderTop: `1px solid rgba(155,148,134,0.25)`,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10.5,
              color: T.mutedDk,
              letterSpacing: 1,
            }}
          >
            © 2026 Alexzandra Hernandez
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              border: `2px solid rgba(196,161,255,0.3)`,
              padding: '5px 11px',
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 1.5,
              color: T.lavender,
            }}
          >
            <span
              className="available-dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: T.green,
                flexShrink: 0,
              }}
            />
            AVAILABLE FOR WORK
          </div>
        </div>
      </div>
    </footer>
  );
}
