import { T } from '../../tokens';
import { SectionLabel } from '../shared/SectionLabel';
import { HelpCard } from './HelpCard';

const CARDS = [
  {
    num: '01',
    bg: T.pink,
    title: 'Client Relations',
    body: "People remember how you make them feel. Across ten years of front-desk and service work, mine leave glad they stopped by, and they come back.",
    footer: '10+ YRS WITH CUSTOMERS',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#161310" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M16 5.5a3 3 0 0 1 0 5.5" />
        <path d="M18.5 14c2 .8 3.3 2.6 3.3 4.8" />
      </svg>
    ),
  },
  {
    num: '02',
    bg: T.mint,
    title: 'Problem Solving',
    body: "I read the situation, find what someone actually needs, and make it work with what's on the table. Six years in software taught me to think in systems.",
    footer: 'ANALYTICAL & PRACTICAL',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#161310" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1-1 2H9c0-1-.3-1.4-1-2A6 6 0 0 1 12 3Z" />
      </svg>
    ),
  },
  {
    num: '03',
    bg: T.butter,
    title: 'Follow-Through',
    body: "Nothing slips. From the first hello to the last signature, people can count on me to close the loop and do what I said I would.",
    footer: 'DEPENDABLE, START TO FINISH',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#161310" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 12.5 9 18 20.5 6.5" />
      </svg>
    ),
  },
];

export function HowIHelp() {
  return (
    <section style={{ background: T.cream }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(56px,9vw,110px) clamp(18px,5vw,48px)',
        }}
      >
        <SectionLabel num="02" label="HOW I HELP" mb="clamp(22px,3vw,34px)" />
        <h2
          style={{
            fontWeight: 900,
            fontSize: 'clamp(28px,4.2vw,46px)',
            lineHeight: 1.0,
            letterSpacing: -1.5,
            marginBottom: 14,
            maxWidth: 640,
          }}
        >
          What I bring to your team.
        </h2>
        <p
          style={{
            fontSize: 'clamp(15px,1.5vw,17px)',
            lineHeight: 1.6,
            maxWidth: 540,
            color: T.body,
            marginBottom: 'clamp(34px,4vw,50px)',
          }}
        >
          Not buzzwords. Habits I've built over a decade of real customer work.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 20,
          }}
        >
          {CARDS.map((c) => (
            <HelpCard key={c.num} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
