var expect = require('chai').expect;
var HomePage = require('../pageobjects/homepage');


describe('Homepage tests', () => {
    it('datalayer is present', () => {
        HomePage.open();
        HomePage.accept_cookies();
        expect(HomePage.datalayer).is.not.empty;
    });
});