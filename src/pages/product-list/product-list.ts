import {
    Component
} from '@angular/core';
import {
    NavController,
    LoadingController
} from 'ionic-angular';
import {
    CreateProduct
} from '../create-product/create-product';
import {
    ProductDetails
} from '../product-details/product-details';
import {
    ApiService
} from '../../providers/api-service';

@Component({
    selector: 'page-product-list',
    templateUrl: 'product-list.html',
    providers: [ApiService]
})
export class ProductList {
    loading: any;
    products: any;
    productRows: any;

    constructor(public navCtrl: NavController, public apiService: ApiService, public loadingCtrl: LoadingController) {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.initializeProducts();
    }

    initializeProducts() {
        this.loading.present();
        this.apiService.getProductList()
            .then(data => {
                this.products = data;
                this.productRows = Array.from(Array(Math.ceil(this.products.length / 2)).keys());
            });
        this.loading.dismiss();
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
