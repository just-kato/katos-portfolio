import { T } from '../../tokens';
import { HeroPortrait } from './HeroPortrait';
import { HeroPitch } from './HeroPitch';

export function Hero() {
  return (
    <section id="top" style={{ background: T.cream }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(40px,6vw,72px) clamp(18px,5vw,48px) clamp(48px,7vw,88px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 'clamp(36px,6vw,72px)',
        }}
      >
        <HeroPortrait />
        <HeroPitch />
      </div>
    </section>
  );
}
