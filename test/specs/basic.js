var expect = require('chai').expect;

describe('Skoda-Auto homepage', () => {
  before(function () {
    browser.url('https://www.skoda-auto.cz');
    browser.maximizeWindow();
  });

  after(function () {
    browser.closeWindow();
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

  it('cookie popup should not be visible after accepting', () => {
    var cookie_iframe = $('//iframe[@scrolling="no"]');
    var cookie_accept = $('//input[@value="Souhlasím"]');
    browser.switchToFrame(cookie_iframe);
    cookie_accept.click();
    browser.switchToParentFrame();
    expect(cookie_iframe.isExisting()).to.be.false;
  });

  it('dataLayer should be present', () => {
    var _dataLayer = browser.execute(() => {
      return window.dataLayer;
    });
    expect(_dataLayer).is.not.empty;
  });
});
