
import BasePage from "./BasePage";

class ProductPage extends BasePage{
    get buyNowButton() {return '#buy-now-button'}

    open() {
        super.open();
    }

}

export default new ProductPage()