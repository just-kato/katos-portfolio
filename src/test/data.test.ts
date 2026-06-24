import { FEATURED, PROJECTS, TRACK_STATS, TESTIMONIALS, BRAND_MARKS } from '../data';

describe('FEATURED', () => {
  it('has required fields', () => {
    expect(FEATURED.title).toBeTruthy();
    expect(FEATURED.meta).toBeTruthy();
    expect(FEATURED.description).toBeTruthy();
    expect(FEATURED.href).toMatch(/^https?:\/\//);
    expect(FEATURED.imageBg).toBeTruthy();
  });
});

describe('PROJECTS', () => {
  it('contains 3 entries', () => {
    expect(PROJECTS).toHaveLength(3);
  });

  it('each project has required fields', () => {
    for (const p of PROJECTS) {
      expect(p.title).toBeTruthy();
      expect(p.meta).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.imageBg).toBeTruthy();
    }
  });

  it('projects with href have valid URLs', () => {
    for (const p of PROJECTS) {
      if (p.href) expect(p.href).toMatch(/^https?:\/\//);
    }
  });
});

describe('TRACK_STATS', () => {
  it('contains 4 entries', () => {
    expect(TRACK_STATS).toHaveLength(4);
  });

  it('each stat has exactly 5 bar values', () => {
    for (const s of TRACK_STATS) {
      expect(s.bars).toHaveLength(5);
    }
  });

  it('bar values are between 0 and 100', () => {
    for (const s of TRACK_STATS) {
      for (const b of s.bars) {
        expect(b).toBeGreaterThanOrEqual(0);
        expect(b).toBeLessThanOrEqual(100);
      }
    }
  });

  it('stat values are positive numbers', () => {
    for (const s of TRACK_STATS) {
      expect(s.value).toBeGreaterThan(0);
    }
  });

  it('prefix is + or − when present', () => {
    for (const s of TRACK_STATS) {
      if (s.prefix) expect(['−', '+']).toContain(s.prefix);
    }
  });
});

describe('TESTIMONIALS', () => {
  it('contains 3 entries', () => {
    expect(TESTIMONIALS).toHaveLength(3);
  });

  it('each testimonial has quote, author, accent', () => {
    for (const t of TESTIMONIALS) {
      expect(t.quote).toBeTruthy();
      expect(t.author).toBeTruthy();
      expect(t.accent).toMatch(/^#/);
    }
  });
});

describe('BRAND_MARKS', () => {
  it('contains 5 entries', () => {
    expect(BRAND_MARKS).toHaveLength(5);
  });

  it('each mark has name, image, bg, pad', () => {
    for (const m of BRAND_MARKS) {
      expect(m.name).toBeTruthy();
      expect(m.image).toBeTruthy();
      expect(m.bg).toBeTruthy();
      expect(m.pad).toBeGreaterThan(0);
    }
  });
});
