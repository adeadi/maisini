import {
    Component
} from '@angular/core';
import {
    NavController,
    ModalController,
    PopoverController,
    LoadingController,
    NavParams,
    Platform
} from 'ionic-angular';
import {
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    GoogleMapsMarkerOptions,
    GoogleMapsMarker,
    Geolocation,
    LocationAccuracy
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
import {
    ProductLocation
} from '../product-location/product-location';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    loading: any;
    map: GoogleMap;
    isClickable = false;
    location: any;

    constructor(public navCtrl: NavController, public params: NavParams, public platform: Platform,
        public modalCtrl: ModalController, public popoverCtrl: PopoverController,
        public loadingCtrl: LoadingController) {

        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.isClickable = this.params.get('isClickable');
        console.log(this.isClickable);

        platform.ready().then(() => {
            this.loadMap();
        });
    }

    setMapClickable(val) {
        this.map.setClickable(!val);
        this.isClickable = !val;
    }

    openCategoryModal() {
        this.map.setClickable(false);
        let modal = this.modalCtrl.create(ListCategoryModal);
        modal.onDidDismiss(data => {
            this.map.setClickable(true);
        });
        modal.present();
    }

    openRangeLocationPopover() {
        let popover = this.popoverCtrl.create(RangeLocationModal);
        popover.present();
    }

    openProductList() {
        this.navCtrl.push(ProductList);
    }

    openProductLocation() {
        this.navCtrl.push(ProductLocation);
    }

    loadMap() {
        this.loading.present();
        LocationAccuracy.canRequest().then((canRequest: boolean) => {
            if (canRequest) {
                LocationAccuracy.request(LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                    () => {
                        console.log('Request successful');
                        Geolocation.getCurrentPosition().then((position) => {
                            this.location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
                            this.map = new GoogleMap('map', {
                                'backgroundColor': 'white',
                                'controls': {
                                    'compass': true,
                                    'myLocationButton': true,
                                    'indoorPicker': true
                                },
                                'gestures': {
                                    'scroll': true,
                                    'tilt': true,
                                    'rotate': true,
                                    'zoom': true
                                },
                                'camera': {
                                    'latLng': this.location,
                                    'tilt': 30,
                                    'zoom': 15,
                                    'bearing': 50
                                }
                            });
                            this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
                                let markerOptions: GoogleMapsMarkerOptions = {
                                    position: this.location,
                                    title: 'Ionic Title\n is Awesome!',
                                    snippet: 'This is snippet',
                                    styles: {
                                        'text-align': 'center',
                                        'font-style': 'italic',
                                        'font-weight': 'bold',
                                        'color': 'red'
                                    },
                                    icon: 'blue',
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
                            this.loading.dismiss();
                        }, (err) => {
                            console.log("map error");
                            console.log(err);
                            this.loading.dismiss();
                        });
                    },
                    error => {
                        console.log('Error requesting location permissions', error);
                        this.location = new GoogleMapsLatLng(3.1576024, 101.7096977);
                        this.map = new GoogleMap('map', {
                            'backgroundColor': 'white',
                            'controls': {
                                'compass': true,
                                'myLocationButton': true,
                                'indoorPicker': true
                            },
                            'gestures': {
                                'scroll': true,
                                'tilt': true,
                                'rotate': true,
                                'zoom': true
                            },
                            'camera': {
                                'latLng': this.location,
                                'tilt': 30,
                                'zoom': 15,
                                'bearing': 50
                            }
                        });
                        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
                            let markerOptions: GoogleMapsMarkerOptions = {
                                position: this.location,
                                title: 'Ionic Title\n is Awesome!',
                                snippet: 'This is snippet',
                                styles: {
                                    'text-align': 'center',
                                    'font-style': 'italic',
                                    'font-weight': 'bold',
                                    'color': 'red'
                                },
                                icon: 'blue',
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
                        this.loading.dismiss();
                    }
                );
            }
        });


    }
}
