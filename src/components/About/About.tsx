import { T } from '../../tokens';
import { SectionLabel } from '../shared/SectionLabel';

export function About() {
  return (
    <section id="about" style={{ background: T.sand }}>
      <div
        style={{
          maxWidth: 1140,
          margin: '0 auto',
          padding: 'clamp(56px,9vw,110px) clamp(18px,5vw,48px)',
        }}
      >
        <SectionLabel num="01" label="ABOUT" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(30px,5vw,70px)' }}>
          <div style={{ flex: '1 1 460px', minWidth: 0 }}>
            <p
              style={{
                fontWeight: 800,
                fontSize: 'clamp(24px,3.4vw,38px)',
                lineHeight: 1.12,
                letterSpacing: -1,
              }}
            >
              Six years writing software taught me to{' '}
              <span style={{ color: T.accentB }}>read the numbers</span> A decade with
              customers taught me to <span style={{ color: T.accentP }}>read the room.</span>
            </p>
            <p
              style={{
                marginTop: 24,
                fontSize: 'clamp(15px,1.5vw,18px)',
                lineHeight: 1.6,
                maxWidth: 560,
                color: T.body,
              }}
            >
              Now I'm bringing both into mortgage lending, where reading a client's numbers and reading the person across the table are the whole job. I'm pursuing my NMLS license and looking for a loan origination role where being genuinely good with people matters.


            </p>
          </div>

          <div
            style={{
              flex: '1 1 240px',
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div
              style={{
                border: `3px solid ${T.ink}`,
                boxShadow: `5px 5px 0 ${T.ink}`,
                background: T.white,
                padding: 18,
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: T.mutedBrown,
                }}
              >
                OPEN TO
              </div>
              <div style={{ fontWeight: 800, fontSize: 18, marginTop: 7, lineHeight: 1.25 }}>
                Mortgage Lending
              </div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  fontWeight: 700,
                  color: T.body,
                  marginTop: 3,
                }}
              >
                NMLS in progress


              </div>
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              <div
                style={{
                  flex: 1,
                  border: `3px solid ${T.ink}`,
                  boxShadow: `5px 5px 0 ${T.ink}`,
                  background: T.mint,
                  padding: 16,
                }}
              >
                <div style={{ fontWeight: 900, fontSize: 30, letterSpacing: -1.5, lineHeight: 1 }}>
                  10+
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9.5,
                    fontWeight: 700,
                    color: T.darkMint,
                    marginTop: 5,
                    lineHeight: 1.4,
                  }}
                >
                  YRS CLIENT-
                  <br />
                  FACING
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  border: `3px solid ${T.ink}`,
                  boxShadow: `5px 5px 0 ${T.ink}`,
                  background: T.butter,
                  padding: 16,
                }}
              >
                <div style={{ fontWeight: 900, fontSize: 30, letterSpacing: -1.5, lineHeight: 1 }}>
                  6
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9.5,
                    fontWeight: 700,
                    color: T.darkButter,
                    marginTop: 5,
                    lineHeight: 1.4,
                  }}
                >
                  YRS SOFTWARE
                  <br />
                  ENG.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
