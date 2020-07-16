
import searchResults from "../../pages/SearchResults";
import mainPageHeader from "../../pages/Header";
import ProductPage from "../../pages/ProductPage";

const input = require('../../data/input.json')
const expected = require('../../data/expected/expected.json')
describe('Search Reasult', ()=> {
    before('', () => {
       mainPageHeader.open();
    })
    it('Search Input iphone ', function () {
        mainPageHeader.searchInput(input.TC1.searchKeyWord)
        expect(searchResults.searchKeyWord.getText()).contain(expected.TC1.searchKeyWord)
    });

    it('Search Input LapTop ', function () {
        browser.pause(1000)
        mainPageHeader.searchInput(input.TC2.searchKeyWord)
        expect(searchResults.searchKeyWord.getText()).contain(expected.TC2.searchKeyWord)
        browser.pause(1000)
        searchResults.firstItem.click()
    });


});

describe('PRODUCT PAGE',()=>{
    it('Buy Now Button is displayed ', function () {
        expect(ProductPage.elemIsDisplayed(ProductPage.buyNowButton)).true
        browser.pause(5000)
    });

});