var expect = require('chai').expect
var HomePage = require('../pageobjects/home.page.js')
var DataLayer = require('../dataobjects/datalayer.js')
var Network = require('../dataobjects/network.js')

describe('Homepage tests', () => {

    before(function () {
        Network.start_network_listener()
        HomePage.open()
        HomePage.maximize()
        HomePage.switch_to_cookie_frame()
        HomePage.accept_cookies()
        HomePage.switch_back_from_iframe()
    })

    it('GA tag should be fired after cookies are accepted', () => {
        expect(Network.check_for_tag('www.google-analytics.com/collect')).to.be.true
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