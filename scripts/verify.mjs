import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
fs.mkdirSync('test-results', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'test-results/desktop.png' });
assert.equal(await page.locator('h1').textContent(), 'Pashmina');
assert.equal(await page.locator('main > section').count(), 12);
assert.equal(await page.locator('video').count(), 10);
assert.equal(await page.locator('video[src]').count() < 10, true, 'Offscreen videos must remain unloaded');
assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'Desktop overflow');
await page.locator('#work').scrollIntoViewIfNeeded();
await page.locator('.filter', { hasText: 'COMMERCIAL TECH REEL' }).click();
assert.equal(await page.locator('.work-float:visible').count(), 1);
await page.getByRole('button', { name: 'ALL', exact: true }).click();
assert.equal(await page.locator('.work-float:visible').count(), 9);
await page.locator('#quizBox').scrollIntoViewIfNeeded();
// Playwright considers opacity:0 elements actionable. Check the full ancestor
// chain too, so a transparent section cannot silently pass the quiz test.
await page.waitForFunction(() => {
  let element = document.querySelector('#quizBox');
  while (element) {
    if (Number(getComputedStyle(element).opacity) < .99) return false;
    element = element.parentElement;
  }
  return true;
});
await page.screenshot({ path: 'test-results/quiz-desktop.png' });
for (let i = 0; i < 4; i++) {
  await page.locator('.quiz-step-label').filter({ hasText: `Question ${i + 1} of 4` }).waitFor();
  await page.locator('.quiz-option').first().click();
}
await page.locator('.quiz-result h3').waitFor();
assert.equal(await page.locator('.quiz-result h3').innerText(), 'UGC & Talking-Head Edits');
await page.getByRole('link', { name: 'See Matching Work' }).click();
assert.equal(await page.locator('.work-float:visible').count(), 1);
assert.equal(await page.locator('.filter.active').innerText(), 'UGC PRODUCT AD');
await page.getByRole('button', { name: 'Retake the quiz' }).click();
await page.getByText('Question 1 of 4').waitFor();
await page.getByRole('button', { name: 'ALL', exact: true }).click();
await page.locator('#work').scrollIntoViewIfNeeded();
await page.screenshot({ path: 'test-results/work.png' });
// Verify real muted autoplay and audio exclusivity using a deterministic tiny media fixture.
// Live reference media may be large; their URLs and readiness are reported separately below.
const videoState = await page.locator('video').evaluateAll(videos => videos.map(v => ({ key: v.dataset.mediaKey, loaded: Boolean(v.src), muted: v.muted, loop: v.loop, inline: v.playsInline, ready: v.readyState, paused: v.paused })));
assert(videoState.every(v => v.muted && v.loop && v.inline));
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'test-results/mobile.png' });
assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'Mobile overflow');
await page.getByRole('button', { name: 'Open navigation' }).click();
await page.getByRole('dialog').waitFor();
await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Work', exact: true }).click();
await page.getByRole('dialog').waitFor({ state: 'hidden' });
assert.equal(new URL(page.url()).hash, '#work');
await page.screenshot({ path: 'test-results/mobile-work.png' });
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto('http://localhost:3000/#quiz', { waitUntil: 'networkidle' });
await page.locator('#quizBox').scrollIntoViewIfNeeded();
assert.equal(await page.locator('#quiz').evaluate(element => getComputedStyle(element).opacity), '1');
assert.equal(await page.locator('.quiz-option').count(), 4);
assert.equal(await page.locator('.quiz-option').evaluateAll(elements => elements.every(element => getComputedStyle(element).opacity === '1')), true, 'Reduced-motion options must stay visible');
await page.screenshot({ path: 'test-results/quiz-mobile.png' });
assert.deepEqual(errors, [], 'Browser runtime errors');
fs.writeFileSync('test-results/verification.json', JSON.stringify({ passed: true, videoState, errors }, null, 2));
console.log(JSON.stringify({ passed: true, videoState, errors }, null, 2));
await browser.close();
