import { T } from '../tokens';

describe('tokens', () => {
  it('exports a T object', () => {
    expect(T).toBeDefined();
    expect(typeof T).toBe('object');
  });

  it('has required base colors', () => {
    expect(T.ink).toBe('#161310');
    expect(T.sand).toBe('#F2EEE4');
    expect(T.cream).toBe('#FBF6EC');
    expect(T.white).toBe('#ffffff');
  });

  it('has accent colors', () => {
    expect(T.lavender).toBe('#C4A1FF');
    expect(T.pink).toBe('#FFB2EF');
    expect(T.mint).toBe('#A7DBD8');
    expect(T.butter).toBe('#FDFD96');
  });

  it('has new semantic tokens', () => {
    expect(T.mutedBrown).toBe('#5f584c');
    expect(T.darkMint).toBe('#1c4a44');
    expect(T.darkButter).toBe('#6b6410');
    expect(T.darkPurple).toBe('#241c33');
    expect(T.purple).toBe('#5a3fa0');
    expect(T.mutedLight).toBe('#ccc5b8');
    expect(T.errorRed).toBe('#cc0000');
    expect(T.highlightYellow).toBe('#FFE44D');
  });

  it('all values are valid hex strings', () => {
    const hexRe = /^#[0-9a-fA-F]{3,8}$/;
    for (const [key, val] of Object.entries(T)) {
      expect(val, `token "${key}"`).toMatch(hexRe);
    }
  });
});
