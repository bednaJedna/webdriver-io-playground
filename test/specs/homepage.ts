var expect = require('chai').expect
var HomePage = require('../pageobjects/home.page.mjs')
var DataLayer = require('../dataobjects/datalayer.mjs')

describe('Homepage tests', () => {

    before(function () {
        HomePage.open()
        HomePage.switch_to_cookie_frame()
        HomePage.accept_cookies()
        HomePage.switch_back_from_iframe()
    })

    it('datalayer is present', () => {
        expect(DataLayer.datalayer).is.not.empty
    })

    it('datalayer has matrixId=1 activity', () => {
        expect(DataLayer.check_activity_for_presence('1')).to.be.true
    })

    it('activity with matrixId=1 has all properties', () => {
        expect(DataLayer.verify_activity({
            matrixId: "1",
            page: "homepage",
            to_check: "props"
        })).to.be.true
    })

    it('activity with matrixId=1 has all correct values', () => {
        expect(DataLayer.verify_activity({
            matrixId: "1",
            page: "homepage",
            to_check: "values"
        })).to.be.true
    })
})