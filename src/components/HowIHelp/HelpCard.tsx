import { T } from '../../tokens';

interface Props {
  num: string;
  title: string;
  body: string;
  footer: string;
  bg: string;
  icon: React.ReactNode;
}

export function HelpCard({ num, title, body, footer, bg, icon }: Props) {
  return (
    <div
      className="hover-press"
      style={{
        border: `3px solid ${T.ink}`,
        boxShadow: `6px 6px 0 ${T.ink}`,
        background: bg,
        padding: 26,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 18,
          right: 20,
          fontFamily: "'Space Mono', monospace",
          fontSize: 13,
          fontWeight: 700,
          color: 'rgba(22,19,16,0.28)',
        }}
      >
        {num}
      </span>

      <div
        style={{
          width: 54,
          height: 54,
          background: T.white,
          border: `3px solid ${T.ink}`,
          boxShadow: `3px 3px 0 ${T.ink}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 22,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      <div style={{ fontWeight: 900, fontSize: 21, letterSpacing: -0.5 }}>{title}</div>
      <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.55, color: T.dark2 }}>{body}</p>

      <div
        style={{
          marginTop: 'auto',
          paddingTop: 16,
          borderTop: `2px solid ${T.ink}`,
          fontFamily: "'Space Mono', monospace",
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: 1.5,
          color: T.ink,
        }}
      >
        {footer}
      </div>
    </div>
  );
}
