import BasePage from "./BasePage";
class SearchResults extends BasePage{
    get searchKeyWord(){return $('.a-color-state')};
    get firstItem(){return $('//div[@class="a-section aok-relative s-image-fixed-height"]')}

}
export default new SearchResults();