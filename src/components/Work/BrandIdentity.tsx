import { T } from '../../tokens';
import { SectionLabel } from '../shared/SectionLabel';
import { BRAND_MARKS } from '../../data';

export function BrandIdentity() {
  return (
    <>
      <SectionLabel num="05" label="BRAND IDENTITY" mb="clamp(16px,2vw,22px)" />
      <p
        style={{
          fontSize: 'clamp(15px,1.5vw,17px)',
          lineHeight: 1.55,
          maxWidth: 560,
          color: T.body,
          marginBottom: 'clamp(26px,3vw,34px)',
        }}
      >
        Logos and brand marks I've designed for small businesses, side projects, and friends. Proof
        I can shape how something looks and feels, not just how it works.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {BRAND_MARKS.map((m) => (
          <div
            key={m.name}
            style={{
              flex: '1 1 150px',
              border: `3px solid ${T.ink}`,
              boxShadow: `5px 5px 0 ${T.ink}`,
              background: m.bg,
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: m.pad,
            }}
          >
            <img
              src={m.image}
              alt={m.name}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
