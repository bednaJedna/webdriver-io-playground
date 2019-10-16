var Page = require('../pageobjects/page.js').default

class HomePage extends Page {

    get cookie_iframe() {
        return $('//iframe[@scrolling="no"]')
    }

    get cookie_accept_button() {
        return $('//input[@value="Souhlasím"]')
    }

    get explore_bttn() {
        return $('//*[@id="HomeBannerModule-b345644c"]/div/div[5]/div/div[1]/div/div/div[2]/div[2]/div/a')
    }

    get datalayer() {
        return browser.execute(() => {
            return window.dataLayer
        });
    }

    open() {
        super.open('https://www.skoda-auto.cz')
    }

    accept_cookies() {
        this.cookie_accept_button.click()
    }

    switch_to_cookie_frame() {
        browser.switchToFrame(this.cookie_iframe)
    }

    switch_back_from_iframe() {
        browser.switchToParentFrame()
    }

    click_explore_bttn() {
        this.explore_bttn.waitForExist(5000)
        this.explore_bttn.click()
    }

    maximizeWindow() {
        super.maximize()
    }
}

module.exports = new HomePage()