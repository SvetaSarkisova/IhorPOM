import manePage from "../../pages/mainPage";
import mainPageHeader from "../../pages/mainPageHeader";

describe ('MAIN PAGE ELEMENTS ARE EXISTING',()=> {
    before('Before',()=>{
        mainPageHeader.openUrl('/')
    })

    xit('amazon logo is displayed ', function () {
       expect(mainPageHeader.elemIsDisplayed(mainPageHeader.logo)).true
        
    });

    xit('hamburger menu is displayed  ', function () {
       expect(mainPageHeader.elemIsDisplayed(mainPageHeader.hamburger)).true

        
    });

    xit('Search Scope is Displayed ', function () {
       expect(mainPageHeader.elemIsDisplayed(mainPageHeader.searchScope)).true

    });

    it('Input Search is displayed ', function () {
        expect(mainPageHeader.elemIsDisplayed(mainPageHeader.inputSearch)).true
        
    });

    it('search button is displayed ', function () {
        expect(mainPageHeader.elemIsDisplayed(mainPageHeader.searchButton)).true

    });

    it('language button is displayed ', function () {
        expect(mainPageHeader.elemIsDisplayed(mainPageHeader.languageButton)).true

    });

})