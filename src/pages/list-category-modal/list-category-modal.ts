import {
    Component
} from '@angular/core';
import {
    ViewController,
    NavParams
} from 'ionic-angular';

@Component({
    selector: 'page-list-category-modal',
    templateUrl: 'list-category-modal.html'
})
export class ListCategoryModal {
    items;

    constructor(public viewCtrl: ViewController) {
        this.initializeItems();
    }

    initializeItems() {
        this.items = [
            {
                category: 'VEHICLES',
                subCategory: ['Cars',
                                'Motorcycles',
                                'Car Accessories & Parts',
                                'Motorcycle Accessories & Parts',
                                'Other Accessories & Parts',
                                'Commercial Vehicle & Boats'
                             ],
                image: 'build/img/vehicle_category.jpg'
            },
            {
                category: 'PROPERTIES',
                subCategory: ['Properties for Sale', 'Properties for Rent'],
                image: 'build/img/properties_category.jpg'
            },
            {
                category: 'ELECTRONICS',
                subCategory: ['Mobile Phones & Gadgets',
                                'Accessories for Phones & Gadgets',
                                'TV/Audio/Video',
                                'Computers & Accessories',
                                'Cameras & Photography',
                                'Games & Consoles'
                             ],
                image: 'build/img/electronics_category.jpg'
            },
            {
                category: 'HOME & PERSONAL ITEMS',
                subCategory: ['Women\'s Collection',
                                'Men\'s Collection',
                                'Unisex Collection',
                                'Bed & Bath',
                                'Home Appliances & Kitchen',
                                'Furniture & Decoration',
                                'Garden Items'
                             ],
                image: 'build/img/personal_items_category.jpg'
            },
            {
                category: 'LEISURE/SPORTS/HOBBIES',
                subCategory: ['Textbooks',
                                'Sports & Outdoors',
                                'Hobby & Collectibles',
                                'Music/Movies/Books/Magazines',
                                'Pets',
                                'Tickets & Vouchers',
                                'Music Instruments'
                             ],
                image: 'build/img/sports_category.jpg'
            },
            {
                category: 'BUSINESS TO BUSINESS',
                subCategory: ['Professional/Business Equipment',
                                'Business for Sale',
                                'JOBS & SERVICES',
                                'Jobs',
                                'Services'
                             ],
                image: 'build/img/b2b_category.jpg'
            },
            {
                category: 'TRAVEL',
                subCategory: ['Accommodation & Homestays', 'Tours and Holidays'],
                image: 'build/img/travel_category.jpg'
            },
            {
                category: 'EVERYTHING ELSE',
                subCategory: ['Food',
                                'Others',
                                'Garage Sale',
                                'Items for Swap',
                                'Spring Cleaning'
                             ],
                image: 'build/img/everything_else_category.jpg'
            }
        ];
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
