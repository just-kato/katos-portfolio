import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { vi } from 'vitest';
import { T } from '../tokens';

// jsdom doesn't define window.matchMedia — stub it once for all component tests
beforeAll(() => {
  vi.stubGlobal('matchMedia', vi.fn(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })));
  class MockIO {
    observe = vi.fn();
    disconnect = vi.fn();
  }
  vi.stubGlobal('IntersectionObserver', MockIO);
});
afterAll(() => vi.unstubAllGlobals());

// ── SectionLabel ────────────────────────────────────────────────────────────

import { SectionLabel } from '../components/shared/SectionLabel';

describe('SectionLabel', () => {
  it('renders number and label', () => {
    render(<SectionLabel num="01" label="ABOUT" />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText(/ABOUT/)).toBeInTheDocument();
  });

  it('applies dark variant text color', () => {
    const { container } = render(<SectionLabel num="03" label="TRACK RECORD" dark />);
    expect(container.firstChild as HTMLElement).toHaveStyle({ color: T.mutedLight });
  });

  it('applies custom numColor', () => {
    render(<SectionLabel num="07" label="CONTACT" numColor={T.purple} />);
    expect(screen.getByText('07')).toHaveStyle({ color: T.purple });
  });

  it('applies custom mb', () => {
    const { container } = render(<SectionLabel num="01" label="X" mb="10px" />);
    expect((container.firstChild as HTMLElement).style.marginBottom).toBe('10px');
  });

  it('uses default muted number color in light mode', () => {
    render(<SectionLabel num="02" label="HOW I HELP" />);
    expect(screen.getByText('02')).toHaveStyle({ color: T.muted });
  });
});

// ── Footer ──────────────────────────────────────────────────────────────────

import { Footer } from '../components/Footer/Footer';

describe('Footer', () => {
  it('renders name', () => {
    render(<Footer />);
    expect(screen.getByText('Alexzandra Hernandez')).toBeInTheDocument();
  });

  it('renders email link with correct href', () => {
    render(<Footer />);
    expect(screen.getByText('alexzandra.hernandez@proton.me'))
      .toHaveAttribute('href', 'mailto:alexzandra.hernandez@proton.me');
  });

  it('renders LinkedIn link', () => {
    render(<Footer />);
    expect(screen.getByText('LinkedIn'))
      .toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });

  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026/)).toBeInTheDocument();
  });

  it('renders availability badge', () => {
    render(<Footer />);
    expect(screen.getByText('AVAILABLE FOR WORK')).toBeInTheDocument();
  });

  it('renders back to top link', () => {
    render(<Footer />);
    expect(screen.getByText('Back to top ↑')).toHaveAttribute('href', '#top');
  });
});

// ── TopBar ──────────────────────────────────────────────────────────────────

import { TopBar } from '../components/TopBar/TopBar';

describe('TopBar', () => {
  it('renders name link', () => {
    render(<TopBar />);
    expect(screen.getByText(/Alexzandra/)).toBeInTheDocument();
  });

  it('renders About, Work, Contact nav links', () => {
    render(<TopBar />);
    expect(screen.getByText('About')).toHaveAttribute('href', '#about');
    expect(screen.getByText('Work')).toHaveAttribute('href', '#work');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact');
  });

  it('renders résumé download button', () => {
    render(<TopBar />);
    const link = screen.getByText('RÉSUMÉ ↓');
    expect(link).toHaveAttribute('href', 'resume.pdf');
    expect(link).toHaveAttribute('download');
  });

  it('header is sticky', () => {
    const { container } = render(<TopBar />);
    expect((container.querySelector('header') as HTMLElement).style.position).toBe('sticky');
  });
});

// ── Hero ─────────────────────────────────────────────────────────────────────

import { HeroPortrait } from '../components/Hero/HeroPortrait';
import { HeroPitch } from '../components/Hero/HeroPitch';
import { Hero } from '../components/Hero/Hero';

describe('HeroPortrait', () => {
  it('renders AVAILABLE badge', () => {
    render(<HeroPortrait />);
    expect(screen.getByText('AVAILABLE')).toBeInTheDocument();
  });

  it("renders GSU '29 badge", () => {
    render(<HeroPortrait />);
    expect(screen.getByText(/GSU/)).toBeInTheDocument();
  });

  it('renders the portrait image', () => {
    const { container } = render(<HeroPortrait />);
    expect(container.querySelector('[style*="background-image"]')).toBeInTheDocument();
  });
});

describe('HeroPitch', () => {
  it('renders both name lines', () => {
    render(<HeroPitch />);
    expect(screen.getByText('Alexzandra')).toBeInTheDocument();
    expect(screen.getByText('Hernandez')).toBeInTheDocument();
  });

  it('renders SVG highlight behind "clients"', () => {
    render(<HeroPitch />);
    const clientsSpan = screen.getByText('clients').closest('span');
    expect(clientsSpan?.querySelector('svg')).toBeInTheDocument();
    expect(clientsSpan?.querySelector('.clients-highlight')).toBeInTheDocument();
    expect(clientsSpan?.querySelector('.clients-underline')).toBeInTheDocument();
  });

  it('renders both CTAs', () => {
    render(<HeroPitch />);
    expect(screen.getByText('Get in touch →')).toHaveAttribute('href', '#contact');
    expect(screen.getByText('Download résumé ↓')).toHaveAttribute('download');
  });

  it('renders tagline copy', () => {
    render(<HeroPitch />);
    expect(screen.getByText(/REAL ESTATE/)).toBeInTheDocument();
  });
});

describe('Hero', () => {
  it('renders section with id="top"', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('#top')).toBeInTheDocument();
  });

  it('renders portrait and pitch together', () => {
    render(<Hero />);
    expect(screen.getByText('AVAILABLE')).toBeInTheDocument();
    expect(screen.getByText('Alexzandra')).toBeInTheDocument();
  });
});

// ── About ────────────────────────────────────────────────────────────────────

import { About } from '../components/About/About';

describe('About', () => {
  it('renders section with id="about"', () => {
    const { container } = render(<About />);
    expect(container.querySelector('#about')).toBeInTheDocument();
  });

  it('renders education card content', () => {
    render(<About />);
    expect(screen.getByText('B.S. Real Estate')).toBeInTheDocument();
    expect(screen.getAllByText(/Georgia State/).length).toBeGreaterThan(0);
  });

  it('renders stat tiles', () => {
    render(<About />);
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  it('renders pull-quote paragraph', () => {
    render(<About />);
    expect(screen.getByText(/read the numbers/)).toBeInTheDocument();
    expect(screen.getByText(/read the room/)).toBeInTheDocument();
  });
});

// ── HowIHelp ─────────────────────────────────────────────────────────────────

import { HowIHelp } from '../components/HowIHelp/HowIHelp';
import { HelpCard } from '../components/HowIHelp/HelpCard';

describe('HelpCard', () => {
  const props = {
    num: '01',
    title: 'Client Relations',
    body: 'People remember how you make them feel.',
    footer: '10+ YRS WITH CUSTOMERS',
    bg: T.pink,
    icon: <span data-testid="icon">icon</span>,
  };

  it('renders all content sections', () => {
    render(<HelpCard {...props} />);
    expect(screen.getByText('Client Relations')).toBeInTheDocument();
    expect(screen.getByText(/People remember/)).toBeInTheDocument();
    expect(screen.getByText('10+ YRS WITH CUSTOMERS')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<HelpCard {...props} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies background color', () => {
    const { container } = render(<HelpCard {...props} />);
    expect(container.firstChild as HTMLElement).toHaveStyle({ background: T.pink });
  });
});

describe('HowIHelp', () => {
  it('renders all three skill cards', () => {
    render(<HowIHelp />);
    expect(screen.getByText('Client Relations')).toBeInTheDocument();
    expect(screen.getByText('Problem Solving')).toBeInTheDocument();
    expect(screen.getByText('Follow-Through')).toBeInTheDocument();
  });

  it('renders heading and subtext', () => {
    render(<HowIHelp />);
    expect(screen.getByText('What I bring to your team.')).toBeInTheDocument();
    expect(screen.getByText(/Not buzzwords/)).toBeInTheDocument();
  });
});

// ── Work ──────────────────────────────────────────────────────────────────────

import { FeaturedCard } from '../components/Work/FeaturedCard';
import { ProjectCard } from '../components/Work/ProjectCard';
import { Work } from '../components/Work/Work';

const MOCK_FEATURED = {
  title: 'Test Project',
  meta: 'CLIENT · REACT',
  description: 'A test project.',
  image: 'test.png',
  imageBg: T.white,
  href: 'https://example.com',
};

describe('FeaturedCard', () => {
  it('renders title and FEATURED badge', () => {
    render(<FeaturedCard {...MOCK_FEATURED} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('★ FEATURED')).toBeInTheDocument();
  });

  it('links to the correct href with target _blank', () => {
    const { container } = render(<FeaturedCard {...MOCK_FEATURED} />);
    const link = container.querySelector('a')!;
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders description', () => {
    render(<FeaturedCard {...MOCK_FEATURED} />);
    expect(screen.getByText('A test project.')).toBeInTheDocument();
  });
});

const MOCK_PROJECT = {
  title: 'Controller FX',
  meta: 'CLIENT · WEBFLOW',
  description: 'Forex trading hub.',
  image: 'cfx.png',
  imageBg: T.ink,
  href: 'https://controllerfx.com',
};

describe('ProjectCard', () => {
  it('renders as <a> when href is provided', () => {
    const { container } = render(<ProjectCard {...MOCK_PROJECT} />);
    expect(container.querySelector('a')).toBeInTheDocument();
  });

  it('renders as <div> when no href', () => {
    const { container } = render(<ProjectCard {...{ ...MOCK_PROJECT, href: undefined }} />);
    expect(container.querySelector('a')).not.toBeInTheDocument();
  });

  it('renders title and meta', () => {
    render(<ProjectCard {...MOCK_PROJECT} />);
    expect(screen.getByText('Controller FX')).toBeInTheDocument();
    expect(screen.getByText('CLIENT · WEBFLOW')).toBeInTheDocument();
  });

  it('renders ↗ arrow only when href present', () => {
    const { rerender } = render(<ProjectCard {...MOCK_PROJECT} />);
    expect(screen.getByText('↗')).toBeInTheDocument();
    rerender(<ProjectCard {...{ ...MOCK_PROJECT, href: undefined }} />);
    expect(screen.queryByText('↗')).not.toBeInTheDocument();
  });
});

describe('Work', () => {
  it('renders section with id="work"', () => {
    const { container } = render(<Work />);
    expect(container.querySelector('#work')).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(<Work />);
    expect(screen.getByText("Things I've built.")).toBeInTheDocument();
  });

  it('renders FEATURED badge', () => {
    render(<Work />);
    expect(screen.getByText('★ FEATURED')).toBeInTheDocument();
  });

  it('renders all 3 project cards', () => {
    render(<Work />);
    expect(screen.getByText('Controller FX')).toBeInTheDocument();
    expect(screen.getByText('Mochi Timer')).toBeInTheDocument();
    expect(screen.getByText('Finance Dashboard')).toBeInTheDocument();
  });

  it('renders brand identity section', () => {
    render(<Work />);
    expect(screen.getByText('BRAND IDENTITY')).toBeInTheDocument();
  });
});

// ── TrackRecord ───────────────────────────────────────────────────────────────

import { TrackStatCard } from '../components/TrackRecord/TrackStatCard';
import { TrackRecord } from '../components/TrackRecord/TrackRecord';

const MOCK_STAT = {
  value: 25,
  prefix: '−' as const,
  suffix: '%' as const,
  label: 'Customer drop-off',
  description: 'Reworked how we welcomed people.',
  accent: T.pink,
  bars: [92, 76, 60, 46, 34] as [number, number, number, number, number],
  inView: false,
};

describe('TrackStatCard', () => {
  it('renders label and description', () => {
    render(<TrackStatCard {...MOCK_STAT} />);
    expect(screen.getByText('Customer drop-off')).toBeInTheDocument();
    expect(screen.getByText(/Reworked how/)).toBeInTheDocument();
  });

  it('shows "−0%" when not inView', () => {
    render(<TrackStatCard {...MOCK_STAT} inView={false} />);
    expect(screen.getByText('−0%')).toBeInTheDocument();
  });

  it('shows target value when inView with reduced motion', () => {
    // override matchMedia to signal reduced motion for this test only
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
    render(<TrackStatCard {...MOCK_STAT} inView={true} />);
    expect(screen.getByText('−25%')).toBeInTheDocument();
    // restore non-reduced-motion for subsequent tests
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
  });
});

describe('TrackRecord', () => {
  it('renders section heading', () => {
    render(<TrackRecord />);
    expect(screen.getByText('Proof, by the numbers.')).toBeInTheDocument();
  });

  it('renders all 4 stat labels', () => {
    render(<TrackRecord />);
    expect(screen.getByText('Customer drop-off')).toBeInTheDocument();
    expect(screen.getByText('Newcomers retained')).toBeInTheDocument();
    expect(screen.getByText('Caught before customers')).toBeInTheDocument();
    expect(screen.getByText('Sign-up friction')).toBeInTheDocument();
  });
});

// ── Testimonials ──────────────────────────────────────────────────────────────

import { Testimonials } from '../components/Testimonials/Testimonials';

describe('Testimonials', () => {
  it('renders all 3 quotes', () => {
    render(<Testimonials />);
    expect(screen.getByText(/figured out what the business actually needed/)).toBeInTheDocument();
    expect(screen.getByText(/making me feel like I was behind/)).toBeInTheDocument();
    expect(screen.getByText(/over a thousand people/)).toBeInTheDocument();
  });

  it('renders all 3 authors', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Owner, Toasted Sesame Therapy/)).toBeInTheDocument();
    expect(screen.getByText(/Hawkins Family Finds/)).toBeInTheDocument();
    expect(screen.getByText(/Controller FX/)).toBeInTheDocument();
  });

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />);
    expect(screen.getAllByText('"')).toHaveLength(3);
  });
});

// ── Contact ───────────────────────────────────────────────────────────────────

import { Contact } from '../components/Contact/Contact';

describe('Contact', () => {
  it('renders section with id="contact"', () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });

  it('renders headline', () => {
    render(<Contact />);
    expect(screen.getByText(/Ready when you are/)).toBeInTheDocument();
  });

  it('renders OPEN TO pills', () => {
    render(<Contact />);
    expect(screen.getByText('Real Estate')).toBeInTheDocument();
    expect(screen.getByText('Finance')).toBeInTheDocument();
    expect(screen.getByText('Client Services')).toBeInTheDocument();
  });

  it('renders LinkedIn link', () => {
    render(<Contact />);
    expect(screen.getByAltText('LinkedIn').closest('a'))
      .toHaveAttribute('href', expect.stringContaining('linkedin.com'));
  });

  it('renders Download résumé button', () => {
    render(<Contact />);
    expect(screen.getByText('Download résumé')).toBeInTheDocument();
  });
});

// ── ContactForm ────────────────────────────────────────────────────────────────

import { ContactForm } from '../components/Contact/ContactForm';

describe('ContactForm', () => {
  it('renders NAME, EMAIL, MESSAGE fields', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('jane@company.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tell me about the role…')).toBeInTheDocument();
  });

  it('renders SEND button', () => {
    render(<ContactForm />);
    expect(screen.getByText('SEND →')).toBeInTheDocument();
  });

  it('updates field values on change', () => {
    render(<ContactForm />);
    const input = screen.getByPlaceholderText('Jane Doe') as HTMLInputElement;
    fireEvent.change(input, { target: { name: 'name', value: 'Kato' } });
    expect(input.value).toBe('Kato');
  });

  it('shows sent confirmation after successful fetch', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true });
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Jane Doe'), { target: { name: 'name', value: 'A' } });
    fireEvent.change(screen.getByPlaceholderText('jane@company.com'), { target: { name: 'email', value: 'a@b.com' } });
    fireEvent.change(screen.getByPlaceholderText('Tell me about the role…'), { target: { name: 'message', value: 'Hi' } });
    fireEvent.click(screen.getByText('SEND →'));
    await waitFor(() => expect(screen.getByText(/Message sent/)).toBeInTheDocument());
  });

  it('shows error message on failed fetch', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false });
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Jane Doe'), { target: { name: 'name', value: 'A' } });
    fireEvent.change(screen.getByPlaceholderText('jane@company.com'), { target: { name: 'email', value: 'a@b.com' } });
    fireEvent.change(screen.getByPlaceholderText('Tell me about the role…'), { target: { name: 'message', value: 'Hi' } });
    fireEvent.click(screen.getByText('SEND →'));
    await waitFor(() => expect(screen.getByText(/Something went wrong/)).toBeInTheDocument());
  });

  it('shows RETRY on error state', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false });
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText('Jane Doe'), { target: { name: 'name', value: 'A' } });
    fireEvent.change(screen.getByPlaceholderText('jane@company.com'), { target: { name: 'email', value: 'a@b.com' } });
    fireEvent.change(screen.getByPlaceholderText('Tell me about the role…'), { target: { name: 'message', value: 'Hi' } });
    fireEvent.click(screen.getByText('SEND →'));
    await waitFor(() => expect(screen.getByText('RETRY →')).toBeInTheDocument());
  });
});
