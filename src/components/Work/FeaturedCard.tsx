import { T } from '../../tokens';
import type { FeaturedProject } from '../../types';

export function FeaturedCard({ title, meta, description, image, imageBg, href }: FeaturedProject) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-press-featured"
      style={{
        textDecoration: 'none',
        border: `3px solid ${T.ink}`,
        boxShadow: `7px 7px 0 ${T.ink}`,
        background: T.white,
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 22,
      }}
    >
      <div
        style={{
          flex: '1 1 340px',
          minWidth: 0,
          aspectRatio: '16/10',
          borderRight: `3px solid ${T.ink}`,
          overflow: 'hidden',
          background: imageBg,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
        />
      </div>
      <div
        style={{
          flex: '1 1 280px',
          minWidth: 0,
          padding: 'clamp(22px,3vw,34px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            alignItems: 'center',
            gap: 7,
            background: T.butter,
            border: `2.5px solid ${T.ink}`,
            boxShadow: `2px 2px 0 ${T.ink}`,
            padding: '4px 10px',
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 1.5,
            marginBottom: 16,
          }}
        >
          ★ FEATURED
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ fontWeight: 900, fontSize: 'clamp(24px,2.8vw,32px)', letterSpacing: -1 }}>
            {title}
          </div>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 18 }}>↗</span>
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            color: T.accentP,
            marginTop: 7,
          }}
        >
          {meta}
        </div>
        <p
          style={{
            marginTop: 14,
            fontSize: 'clamp(14px,1.4vw,16px)',
            lineHeight: 1.55,
            color: T.body,
            maxWidth: 440,
          }}
        >
          {description}
        </p>
      </div>
    </a>
  );
}
