import { test, expect } from '@playwright/test';

// The page contains TWO forms named "contact":
//   1. A hidden static fallback in index.html (for Netlify build detection)
//   2. The interactive React form (data-netlify="true")
// All selectors must be scoped to the React form to avoid ambiguity.
const FORM = 'form[data-netlify="true"]';

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const form = page.locator(FORM);
    await form.scrollIntoViewIfNeeded();
    await form.waitFor({ state: 'visible' });
  });

  // ── 1. Happy path ──────────────────────────────────────────────────────────
  test('happy path — valid submission shows confirmation, form disappears', async ({ page }) => {
    await page.route('**/*', async (route) => {
      if (route.request().method() === 'POST' && new URL(route.request().url()).pathname === '/') {
        await route.fulfill({ status: 200, body: '' });
      } else {
        await route.continue();
      }
    });

    const form = page.locator(FORM);
    await form.locator('input[name="name"]').fill('Jane Doe');
    await form.locator('input[name="email"]').fill('jane@example.com');
    await form.locator('textarea[name="message"]').fill('I would love to work with you on this role.');
    await form.locator('button[type="submit"]').click();

    await expect(page.getByText("Message sent! I'll reply within a day.")).toBeVisible({ timeout: 5_000 });
    await expect(form.locator('input[name="name"]')).not.toBeVisible();
    await expect(form.locator('textarea[name="message"]')).not.toBeVisible();
  });

  // ── 2. Empty submission ────────────────────────────────────────────────────
  test('empty submission — browser validation blocks request, fields remain', async ({ page }) => {
    let postMade = false;
    await page.route('**/*', async (route) => {
      if (route.request().method() === 'POST') postMade = true;
      await route.continue();
    });

    const form = page.locator(FORM);
    await form.locator('button[type="submit"]').click();
    await page.waitForTimeout(300);

    expect(postMade).toBe(false);
    await expect(form.locator('button[type="submit"]')).toHaveText('SEND →');

    const nameValid = await form.locator('input[name="name"]').evaluate(
      (el: HTMLInputElement) => el.validity.valid
    );
    expect(nameValid).toBe(false);
  });

  // ── 3. Invalid email ───────────────────────────────────────────────────────
  test('invalid email — browser validation blocks request', async ({ page }) => {
    let postMade = false;
    await page.route('**/*', async (route) => {
      if (route.request().method() === 'POST') postMade = true;
      await route.continue();
    });

    const form = page.locator(FORM);
    await form.locator('input[name="name"]').fill('Jane Doe');
    await form.locator('input[name="email"]').fill('not-an-email');
    await form.locator('textarea[name="message"]').fill('Hello there.');
    await form.locator('button[type="submit"]').click();
    await page.waitForTimeout(300);

    expect(postMade).toBe(false);
    await expect(form.locator('button[type="submit"]')).toHaveText('SEND →');

    const emailValid = await form.locator('input[name="email"]').evaluate(
      (el: HTMLInputElement) => el.validity.valid
    );
    expect(emailValid).toBe(false);
  });

  // ── 4. Network failure ─────────────────────────────────────────────────────
  test('network failure — shows error message and retry button', async ({ page }) => {
    await page.route('**/*', async (route) => {
      if (route.request().method() === 'POST' && new URL(route.request().url()).pathname === '/') {
        await route.fulfill({ status: 500, body: 'Internal Server Error' });
      } else {
        await route.continue();
      }
    });

    const form = page.locator(FORM);
    await form.locator('input[name="name"]').fill('Jane Doe');
    await form.locator('input[name="email"]').fill('jane@example.com');
    await form.locator('textarea[name="message"]').fill('Hello there.');
    await form.locator('button[type="submit"]').click();

    await expect(page.getByText('Something went wrong. Try again.')).toBeVisible({ timeout: 5_000 });
    await expect(form.locator('button[type="submit"]')).toHaveText('RETRY →');
  });

  // ── 5. Loading state ───────────────────────────────────────────────────────
  test('loading state — button shows SENDING… while request is in flight', async ({ page }) => {
    let unblock: () => void;
    const blocker = new Promise<void>((resolve) => { unblock = resolve; });

    await page.route('**/*', async (route) => {
      if (route.request().method() === 'POST' && new URL(route.request().url()).pathname === '/') {
        await blocker;
        await route.fulfill({ status: 200, body: '' });
      } else {
        await route.continue();
      }
    });

    const form = page.locator(FORM);
    await form.locator('input[name="name"]').fill('Jane Doe');
    await form.locator('input[name="email"]').fill('jane@example.com');
    await form.locator('textarea[name="message"]').fill('Hello there.');
    await form.locator('button[type="submit"]').click();

    await expect(form.locator('button[type="submit"]')).toHaveText('SENDING…', { timeout: 3_000 });
    await expect(form.locator('button[type="submit"]')).toBeDisabled();

    unblock!();
    await expect(page.getByText("Message sent! I'll reply within a day.")).toBeVisible({ timeout: 5_000 });
  });
});
