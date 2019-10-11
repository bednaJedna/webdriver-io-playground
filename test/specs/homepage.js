var expect = require('chai').expect
var HomePage = require('../pageobjects/home.page.mjs')

describe('Homepage tests', () => {
    it('datalayer is present', () => {
        HomePage.open()        
        HomePage.switch_to_cookie_frame()
        HomePage.accept_cookies()
        HomePage.switch_back_from_iframe()
        
        expect(HomePage.datalayer).is.not.empty
    })
})