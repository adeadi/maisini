import {
    Component
} from '@angular/core';
import {
    NavController,
    ModalController
} from 'ionic-angular';
import {
    ListCategoryModal
} from '../list-category-modal/list-category-modal';

@Component({
    selector: 'page-create-product',
    templateUrl: 'create-product.html'
})
export class CreateProduct {
    category = "Your product category?";
    location = "Your location?";

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

    selectCategory() {
        let modal = this.modalCtrl.create(ListCategoryModal);
        modal.onDidDismiss(data => {
           this.category = data;
        });
        modal.present();
    }

}
