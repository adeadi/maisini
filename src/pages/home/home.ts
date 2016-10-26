import {
    Component
} from '@angular/core';
import {
    NavController,
    ModalController,
    PopoverController,
    NavParams,
    Platform
} from 'ionic-angular';
import {
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    GoogleMapsMarkerOptions,
    GoogleMapsMarker,
    Geolocation
} from 'ionic-native';
import {
    ListCategoryModal
} from '../list-category-modal/list-category-modal';
import {
    ProductList
} from '../product-list/product-list';
import {
    CreateProduct
} from '../create-product/create-product';
import {
    RangeLocationModal
} from '../range-location-modal/range-location-modal';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    map: GoogleMap;

    constructor(public navCtrl: NavController, public platform: Platform, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
        platform.ready().then(() => {
            this.loadMap();
        });
    }

    openCategoryModal() {
        let modal = this.modalCtrl.create(ListCategoryModal);
        modal.present();
    }

    openRangeLocationPopover() {
        let popover = this.popoverCtrl.create(RangeLocationModal);
        popover.present();
    }

    openProductList() {
        this.navCtrl.push(ProductList);
    }

    openCreateProduct() {
        this.navCtrl.push(CreateProduct);
    }

    loadMap() {
        Geolocation.getCurrentPosition().then((position) => {
            let location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);

            this.map = new GoogleMap('map', {
                'backgroundColor': 'white',
                'controls': {
                    'compass': true,
                    'myLocationButton': true,
                    'indoorPicker': true,
                    'zoom': true
                },
                'gestures': {
                    'scroll': true,
                    'tilt': true,
                    'rotate': true,
                    'zoom': true
                },
                'camera': {
                    'latLng': location,
                    'tilt': 30,
                    'zoom': 15,
                    'bearing': 50
                }
            });

            this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
                let markerOptions: GoogleMapsMarkerOptions = {
                    position: location,
                    title: 'Ionic Title\n is Awesome!',
                    snippet: 'This is snippet',
                    styles: {
                        'text-align': 'center',
                        'font-style': 'italic',
                        'font-weight': 'bold',
                        'color': 'red'
                    },
                    icon: 'blue'
                };
                this.map.addMarker(markerOptions).then(
                    (marker: GoogleMapsMarker) => {
                        marker.showInfoWindow();
                        marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                            alert("marker is clicked");
                        });
                        marker.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
                            alert("InfoWindow is clicked");
                        });
                    }
                );

                console.log('Map is ready!');
            });

        }, (err) => {
            console.log(err);
        });
    }
}
