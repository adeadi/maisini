import {
    Component
} from '@angular/core';
import {
    ViewController,
    NavParams
} from 'ionic-angular';
import {
    ApiService
} from '../../providers/api-service';

@Component({
    selector: 'page-list-category-modal',
    templateUrl: 'list-category-modal.html',
    providers: [ApiService]
})
export class ListCategoryModal {
    items: any;

    constructor(public viewCtrl: ViewController, public params: NavParams, public apiService: ApiService) {
        this.initializeItems();
    }

    initializeItems() {
        this.apiService.getCategoryList()
            .then(data => {
                this.items = data;
            });
    }

    getItems(searchbar) {
        // Reset items back to all of the items
        this.initializeItems();

        // set q to the value of the searchbar
        var q = searchbar.target.value;

        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }

        for (var x = 0; x < this.items.length; x++) {
            this.items[x].subCategory = this.items[x].subCategory.filter((v) => {
                if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            })
        }
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    selectedArea(parent, idx) {
        let data = this.items[parent].subCategory[idx];
        console.log(data);
        this.viewCtrl.dismiss(data);
    }

}
