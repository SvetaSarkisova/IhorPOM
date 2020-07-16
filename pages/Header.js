import BasePage from './BasePage';
class Header extends BasePage{
    get logo () {return '#nav-logo'}
    get hamburgerMenu (){return '#nav-hamburger-menu'}
    get searchScope(){return '.nav-search-scope'}
    get inputSearch () {return '#twotabsearchtextbox'}
    get searchButton () {return '[value="Go"]'}
    get languageButton() {return '#icp-nav-flyout'}
    get searchInputField() {return '#twotabsearchtextbox'}
    open() {
        super.open('/');
    }
//     // searchInput(text){
//     //     $(this.searchInputField).setValue(text);
//     //     browser.keys('Enter')
//     // }
// }

    searchInput(text){
        $(this.searchInputField).setValue(text);
        $(this.searchButton).click()
    }

    // clickOnBtn(locator){
    // $(locator).click()
    // }
}
export default new Header();
