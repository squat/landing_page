const assert = require('chai').assert;

hermione.config.testTimeout(100500);

it('creates a screenshot of the Home page', async function() {
  await this.browser.url('/');
  const cookiesBtn = await this.browser.$('#cookit-button')
  if (cookiesBtn.elementId) {
    await cookiesBtn.click();
  }
  await this.browser.assertView('plain', 'body',
    {
      tolerance: 2,
      antialiasingTolerance: 2,
      allowViewportOverflow: true,
      captureElementFromTop: true,
      compositeImage: true,
      screenshotDelay: 10,
    });
});

it('creates a screenshot of the Use Cases page', async function() {
  await this.browser.url('/use-cases/');
  const cookiesBtn = await this.browser.$('#cookit-button')
  if (cookiesBtn.elementId) {
    await cookiesBtn.click();
  }
  await this.browser.assertView('plain', 'body',
    {
      ignoreElements: ['#cookit-button'],
      tolerance: 2,
      antialiasingTolerance: 2,
      allowViewportOverflow: true,
      captureElementFromTop: true,
      compositeImage: true,
      screenshotDelay: 10,
    });
});

it('creates a screenshot of the Solutions page', async function() {
  await this.browser.url('/solutions/');
  const cookiesBtn = await this.browser.$('#cookit-button')
  if (cookiesBtn.elementId) {
    await cookiesBtn.click();
  }
  await this.browser.assertView('plain', 'body',
    {
      ignoreElements: ['#cookit-button'],
      tolerance: 2,
      antialiasingTolerance: 2,
      allowViewportOverflow: true,
      captureElementFromTop: true,
      compositeImage: true,
      screenshotDelay: 10,
    });
});

it('creates a screenshot of the Articles page', async function() {
  await this.browser.url('/articles/');
  const cookiesBtn = await this.browser.$('#cookit-button')
  if (cookiesBtn.elementId) {
    await cookiesBtn.click();
  }
  await this.browser.assertView('plain', 'body',
    {
      ignoreElements: ['#cookit-button'],
      tolerance: 2,
      antialiasingTolerance: 2,
      allowViewportOverflow: true,
      captureElementFromTop: true,
      compositeImage: true,
      screenshotDelay: 10,
    });
});
