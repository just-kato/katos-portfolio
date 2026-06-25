import { T } from '../../tokens';
import type { TrackStat } from '../../types';
import { useCountUp } from '../../hooks/useCountUp';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface Props extends TrackStat {
  inView: boolean;
}

const DELAYS = [0, 70, 140, 210, 280] as const;

export function TrackStatCard({ value, prefix, suffix, label, description, accent, bars, inView }: Props) {
  const count = useCountUp(value, { duration: 950, start: inView });
  const reduced = usePrefersReducedMotion();

  return (
    <div
      style={{
        border: `3px solid ${T.sand}`,
        background: T.darkCard,
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontWeight: 900,
          fontSize: 'clamp(38px,4.5vw,52px)',
          letterSpacing: -2,
          lineHeight: 1,
          color: accent,
        }}
      >
        {prefix ?? ''}{count}{suffix ?? ''}
      </div>
      <div style={{ fontWeight: 800, fontSize: 15, marginTop: 10 }}>{label}</div>
      <p
        style={{
          marginTop: 6,
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          color: T.muted,
          lineHeight: 1.5,
        }}
      >
        {description}
      </p>
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 18,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 6,
          height: 74,
        }}
      >
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: inView ? `${h}%` : 0,
              background: accent,
              border: `2px solid ${T.sand}`,
              transition: reduced
                ? 'none'
                : `height .8s cubic-bezier(.22,1,.36,1) ${DELAYS[i]}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
