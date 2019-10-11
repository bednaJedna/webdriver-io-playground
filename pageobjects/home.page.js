import Page from './page';

class HomePage extends Page {

    get cookie_iframe() {
        return $('iframe[@scrolling="no"]');
    }

    get cookie_accept_button() {
        return $('input[@value="Souhlasím"]');
    }

    get datalayer() {
        return browser.execute(() => {
            return window.dataLayer;
        });
    }

    open() {
        super.open('https://skoda-auto.cz');
    }

    accept_cookies() {
        this.cookie_accept_button.click();
    }
}

export default new HomePage();