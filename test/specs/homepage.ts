var expect = require('chai').expect
var HomePage = require('../pageobjects/home.page.js')
var DataLayer = require('../dataobjects/datalayer.js')
var Network = require('../dataobjects/network.js')

describe('Homepage tests', () => {

    before(function () {
        Network.enable()
        HomePage.open()
        HomePage.maximize()
        HomePage.switch_to_cookie_frame()
        HomePage.accept_cookies()
        HomePage.switch_back_from_iframe()
    })

    it('should listen on network events', () => {
        Network.log_responses_received()
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

    it('datalayer has matrixId=22 activity', () => {
        HomePage.click_explore_bttn()
        expect(DataLayer.check_activity_for_presence('22')).to.be.true
    })

})