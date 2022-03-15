const assert = require('chai').assert;

describe('main page', async function() {
  it('should have h1', async function() {
    await this.browser.url('/');

    const title = await this.browser.$('h1').getText();
    assert.equal(title, 'Neural Search Engine');
  });
});

hermione.config.testTimeout(100500);
it('creates a screenshot of the skills page', async function() {
  await this.browser.url('/');
  await this.browser.assertView('header', 'header');
});