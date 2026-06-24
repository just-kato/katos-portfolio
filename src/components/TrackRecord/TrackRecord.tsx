import { T } from '../../tokens';
import { SectionLabel } from '../shared/SectionLabel';
import { TrackStatCard } from './TrackStatCard';
import { TRACK_STATS } from '../../data';
import { useInView } from '../../hooks/useInView';

export function TrackRecord() {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <section id="track-record" style={{ background: T.ink, color: T.sand }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(56px,9vw,110px) clamp(18px,5vw,48px)',
        }}
      >
        <SectionLabel num="03" label="TRACK RECORD" dark mb="clamp(22px,3vw,34px)" />
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(28px,4.2vw,46px)',
            lineHeight: 1.0,
            letterSpacing: -1.5,
            maxWidth: 680,
          }}
        >
          Proof, by the numbers.
        </h2>
        <p
          style={{
            marginTop: 14,
            fontFamily: "'Space Mono', monospace",
            fontSize: 12.5,
            color: T.muted,
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          From my product career, the same instincts that keep a customer happy or a resident
          renewing. Numbers animate as you scroll.
        </p>
        <div
          style={{
            marginTop: 'clamp(34px,4vw,50px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 18,
          }}
        >
          {TRACK_STATS.map((stat) => (
            <TrackStatCard key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
