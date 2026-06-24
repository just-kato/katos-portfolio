import { T } from '../../tokens';
import { SectionLabel } from '../shared/SectionLabel';
import { ContactForm } from './ContactForm';
import linkedinImg from '../../assets/linkedin.png';
import downloadImg from '../../assets/download.png';

const OPEN_TO = [
  { label: 'Real Estate', bg: T.mint },
  { label: 'Finance', bg: T.butter },
  { label: 'Client Services', bg: T.cream },
];

export function Contact() {
  return (
    <section id="contact" style={{ background: T.lavender }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(56px,9vw,110px) clamp(18px,5vw,48px)',
        }}
      >
        <SectionLabel
          num="07"
          label="CONTACT"
          numColor={T.purple}
          mb="clamp(28px,4vw,44px)"
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(30px,5vw,56px)' }}>
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            <h2
              style={{
                fontWeight: 900,
                fontSize: 'clamp(36px,6vw,68px)',
                lineHeight: 0.92,
                letterSpacing: -2,
              }}
            >
              Ready when you are.

            </h2>
            <p
              style={{
                marginTop: 20,
                fontSize: 'clamp(15px,1.5vw,18px)',
                lineHeight: 1.6,
                maxWidth: 420,
                color: T.darkPurple,
              }}
            >
              Looking for customer-facing work in real estate, leasing, mortgage, or banking. Tell me about the role and I'll reply within a day.
            </p>

            <div style={{ marginTop: 26 }}>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: T.darkPurple,
                  marginBottom: 12,
                }}
              >
                OPEN TO
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {OPEN_TO.map(({ label, bg }) => (
                  <span
                    key={label}
                    style={{
                      border: `3px solid ${T.ink}`,
                      boxShadow: `3px 3px 0 ${T.ink}`,
                      background: bg,
                      padding: '9px 15px',
                      fontWeight: 900,
                      fontSize: 16,
                      letterSpacing: -0.3,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 26,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 14,
                alignItems: 'center',
              }}
            >
              <a
                href="https://www.linkedin.com/in/alexzandra-hernandez-92b1801ab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ display: 'block', lineHeight: 0 }}
              >
                <img
                  src={linkedinImg}
                  alt="LinkedIn"
                  style={{ width: 48, height: 48, display: 'block', filter: 'drop-shadow(3px 3px 0 #161310)' }}
                />
              </a>
              <a
                href="resume.pdf"
                download
                className="cta-cream"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: T.ink,
                  color: T.white,
                  border: `3px solid ${T.ink}`,
                  boxShadow: `3px 3px 0 ${T.ink}`,
                  padding: '10px 16px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                <img src={downloadImg} alt="" style={{ width: 16, height: 16, filter: 'invert(1)' }} />
                Download résumé
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
