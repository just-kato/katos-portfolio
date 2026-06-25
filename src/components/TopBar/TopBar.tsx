import { T } from '../../tokens';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

const navLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontFamily: "'Space Mono', monospace",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
};

export function TopBar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: T.cream,
        borderBottom: `3px solid ${T.ink}`,
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: `13px clamp(18px,5vw,48px)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <a
          href="#top"
          style={{ textDecoration: 'none', fontWeight: 900, fontSize: 18, letterSpacing: -0.5 }}
        >
          Alexzandra&nbsp;Hernandez
        </a>
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(14px,2.5vw,28px)',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={navLinkStyle}>
              {label}
            </a>
          ))}
          <a
            href="alexzandra_hernandez_resume.pdf"
            download
            className="btn-resume"
            style={{
              textDecoration: 'none',
              background: T.ink,
              color: T.cream,
              border: `2.5px solid ${T.ink}`,
              boxShadow: `2px 2px 0 ${T.lavender}`,
              padding: '6px 13px',
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            RÉSUMÉ ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
