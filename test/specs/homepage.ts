var expect = require('chai').expect
var HomePage = require('../pageobjects/home.page.mjs')
var DataLayer = require('../dataobjects/datalayer.mjs')

describe('Homepage tests', () => {

    before(function() {
        HomePage.open()        
        HomePage.switch_to_cookie_frame()
        HomePage.accept_cookies()
        HomePage.switch_back_from_iframe()
    })

    it('datalayer is present', () => {
        expect(DataLayer.datalayer).is.not.empty
    })

    it('datalayer has matrixId=1 activity', () => {
        expect(DataLayer.find_activity('1')).to.be.true
    })

})