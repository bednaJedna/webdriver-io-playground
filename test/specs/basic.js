var expect = require('chai').expect;

describe('Skoda-Auto homepage', () => {
  before(function () {
    browser.url('https://www.skoda-auto.cz');
  });

  it('should have the right title', () => {
    const title = browser.getTitle();
    expect(title).to.be.a('ŠKODA AUTO Česká republika | Oficiální web‎ ŠKODA AUTO a.s.');
  });

  it('should have the cookie notice popup iframe present', () => {
    var cookie_iframe = $('//iframe[@scrolling="no"]');
    cookie_iframe.waitForExist(5000);
    expect(cookie_iframe.isExisting()).to.be.true;
  });
});