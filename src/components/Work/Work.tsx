import { T } from '../../tokens';
import { SectionLabel } from '../shared/SectionLabel';
import { FeaturedCard } from './FeaturedCard';
import { ProjectCard } from './ProjectCard';
import { BrandIdentity } from './BrandIdentity';
import { FEATURED, PROJECTS } from '../../data';

export function Work() {
  return (
    <section id="work" style={{ background: T.sand }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(56px,9vw,110px) clamp(18px,5vw,48px)',
        }}
      >
        <SectionLabel num="04" label="SELECTED WORK" mb="clamp(22px,3vw,34px)" />
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(28px,4.2vw,46px)',
            lineHeight: 1.0,
            letterSpacing: -1.5,
            marginBottom: 'clamp(34px,4vw,50px)',
            maxWidth: 640,
          }}
        >
          Things I've built.
        </h2>
        <FeaturedCard {...FEATURED} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 22,
          }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div style={{ marginTop: 'clamp(48px,7vw,84px)' }}>
          <BrandIdentity />
        </div>
      </div>
    </section>
  );
}
