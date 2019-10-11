var Page = require('../pageobjects/page.mjs').default

class HomePage extends Page {

    get cookie_iframe() {
        return $('//iframe[@scrolling="no"]')
    }

    get cookie_accept_button() {
        return $('//input[@value="Souhlasím"]')
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
        super.switch_to_frame(this.cookie_iframe)
    }

    switch_back_from_iframe() {
        super.switch_to_page()
    }
}

module.exports = new HomePage()