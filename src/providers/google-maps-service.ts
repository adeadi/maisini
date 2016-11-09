import {
    Injectable
} from '@angular/core';
import {
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapsLatLng,
    GoogleMapsMarkerOptions,
    GoogleMapsMarker,
    Geolocation
} from 'ionic-native';
import {
    Http
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleMapsService {
    public map: GoogleMap;
    private location: any;

    constructor(public http: Http) {
        console.log('Call GoogleMaps Provider');
    }

    getMap() {
        Geolocation.getCurrentPosition().then((position) => {
            this.location = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
        }, (err) => {
            console.log("map error");
            console.log(err);
        });

        if (typeof this.location == 'undefined' && this.location) {
            this.location = new GoogleMapsLatLng(3.1576024, 101.7096977);
        }

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
    }
}
