export default class BasePage {

    open(url){
        browser.url(url)
    }

    elemIsDisplayed(locator) {
        const res = $(locator).isDisplayed()
        return res;
    }
}

