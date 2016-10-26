import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';
import {
    CreateProduct
} from '../create-product/create-product';
import {
    ProductDetails
} from '../product-details/product-details';
@Component({
    selector: 'page-product-list',
    templateUrl: 'product-list.html'
})
export class ProductList {

    constructor(public navCtrl: NavController) {
    }

    goBack() {
        this.navCtrl.pop();
    }

    openCreateProduct() {
        this.navCtrl.push(CreateProduct);
    }

    openProductDetails() {
        this.navCtrl.push(ProductDetails);
    }

}
