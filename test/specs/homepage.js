var expect = require('chai').expect
import HomePage from '../pageobjects/home.page'

describe('Homepage tests', () => {
    it('datalayer is present', () => {
        HomePage.open()
        HomePage.accept_cookies()
        expect(HomePage.datalayer).is.not.empty
    })
})