import {
    Component
} from '@angular/core';
import {
    NavController,
    Platform
} from 'ionic-angular';
import {
    HomePage
} from '../home/home';

@Component({
    selector: 'page-product-details',
    templateUrl: 'product-details.html'
})
export class ProductDetails {

    constructor(public navCtrl: NavController, public platform: Platform) {
    }

    openMap() {
        this.navCtrl.push(HomePage);
    }

}
