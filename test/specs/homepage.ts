var expect = require('chai').expect;
var HomePage = require('../../pageobjects/home.page').Page;

describe('Homepage tests', () => {
    it('datalayer is present', () => {
        HomePage.open();
        HomePage.accept_cookies();
        expect(HomePage.datalayer).is.not.empty;
    });
});