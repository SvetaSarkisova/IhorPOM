import basePage from "./basePage";


class MainPageHeader extends basePage{

    get logo(){return '#nav-logo'}
    get hamburger(){ return '#nav-hamburger-menu'}
    get searchScope(){ return '.nav-search-scope'}
    get inputSearch() {return '#twotabsearchtextbox'}
    get searchButton() { return '#nav-search-submit-text'}
    get languageButton() { return '#icp-nav-flyout'}




    openUrl() {
        super.openUrl('/');
    }
}
export default new MainPageHeader()

