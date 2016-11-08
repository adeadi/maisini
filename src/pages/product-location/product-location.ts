import {
    Component
} from '@angular/core';
import {
    NavController,
    LoadingController,
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

@Component({
    selector: 'page-product-location',
    templateUrl: 'product-location.html'
})
export class ProductLocation {
    loading: any;
    map: GoogleMap;

    constructor(public navCtrl: NavController, public platform: Platform, public loadingCtrl: LoadingController) {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        platform.ready().then(() => {
            this.loadMap();
        });
    }

    //    ionViewDidLoad() {
    //        console.log('Hello ProductLocation Page');
    //    }

    loadMap() {

    }

}
