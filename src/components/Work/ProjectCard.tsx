import { T } from '../../tokens';
import type { Project } from '../../types';

export function ProjectCard({ title, meta, description, image, imageBg, href, imagePosition }: Project) {
  const inner = (
    <>
      <div
        style={{
          aspectRatio: '16/10',
          borderBottom: `3px solid ${T.ink}`,
          overflow: 'hidden',
          background: imageBg,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imagePosition ?? 'center',
          }}
        />
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ fontWeight: 900, fontSize: 19, letterSpacing: -0.5 }}>{title}</div>
          {href && (
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13 }}>↗</span>
          )}
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: 1,
            color: T.accentP,
            marginTop: 5,
          }}
        >
          {meta}
        </div>
        <p style={{ marginTop: 11, fontSize: 14, lineHeight: 1.5, color: T.body }}>{description}</p>
      </div>
    </>
  );

  const baseStyle: React.CSSProperties = {
    border: `3px solid ${T.ink}`,
    boxShadow: `6px 6px 0 ${T.ink}`,
    background: T.white,
    display: 'flex',
    flexDirection: 'column',
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover-press"
        style={{ ...baseStyle, textDecoration: 'none' }}
      >
        {inner}
      </a>
    );
  }

  return <div style={baseStyle}>{inner}</div>;
}
