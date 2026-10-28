import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const allowed = 'https://www.upwork.com/freelancers/~01de153e8ce8e49ba2?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01de153e8ce8e49ba2%2Fprofile';
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
fs.mkdirSync('test-results', { recursive: true });
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  // Validate the popup destination without requesting anyone's external profile.
  await context.route('https://**/*', route => route.request().url() === allowed
    ? route.fulfill({ contentType: 'text/html', body: '<title>Verified Upwork destination</title>' })
    : route.abort());
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  async function audit() {
    const links = await page.locator('a').evaluateAll(elements => elements.map(a => ({
      label: a.innerText || a.getAttribute('aria-label'), href: a.getAttribute('href'),
      validHash: a.getAttribute('href')?.startsWith('#') && Boolean(document.getElementById(a.getAttribute('href').slice(1))),
      target: a.target, rel: a.rel,
    })));
    assert.deepEqual(links.filter(link => !link.validHash && link.href !== allowed), [], 'Unapproved link destination');
    links.filter(link => link.href === allowed).forEach(link => {
      assert.equal(link.target, '_blank');
      assert(link.rel.includes('noopener') && link.rel.includes('noreferrer'));
    });
    return links;
  }
  const desktop = await audit();
  assert.equal(await page.getByRole('link', { name: 'Discuss a Business Project' }).count(), 2);
  assert.equal(await page.locator('#crawl-vision, a[href="#crawl-vision"]').count(), 0);
  assert.equal(await page.locator('#contact .contact-placeholder:disabled').count(), 2);
  assert.equal(await page.locator('#contact a').count(), 1);
  const popupPromise = page.waitForEvent('popup');
  await page.locator('header .hire').click();
  const popup = await popupPromise;
  await popup.waitForLoadState('domcontentloaded');
  assert.equal(popup.url(), allowed);
  await popup.close();
  await page.locator('#quizBox').scrollIntoViewIfNeeded();
  for (let i = 0; i < 4; i++) {
    await page.locator('.quiz-step-label').filter({ hasText: `Question ${i + 1} of 4` }).waitFor();
    await page.locator('.quiz-option').first().click();
  }
  await page.locator('.quiz-result h3').waitFor();
  await audit();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.getByRole('dialog').waitFor();
  const mobile = await audit();
  const media = await page.locator('video').evaluateAll(elements => elements.map(video => video.getAttribute('src')).filter(Boolean));
  assert(media.every(src => src.startsWith('/videos/')), 'Videos must use local downloaded media');
  const report = { passed: true, externalDestination: allowed, externalLinks: desktop.filter(link => link.href === allowed), desktopLinks: desktop.length, mobileLinks: mobile.length, quizResultChecked: true, popupChecked: true, localMediaChecked: true };
  fs.writeFileSync('test-results/link-audit.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
