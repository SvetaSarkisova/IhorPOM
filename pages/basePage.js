export default class basePage {

    openUrl(url){
        browser.url(url)
    }

    elemIsDisplayed(locator) {
        const res = $(locator).isDisplayed()
        return res;
    }
}

