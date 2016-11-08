import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions,
    RequestMethod
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
    data: any;
    baseUrl = 'http://localhost:4371/maisini-api/index.php';
//    baseUrl = 'http://techapp.info/maisini-api/index.php';
    contentType = 'application/x-www-form-urlencoded';
    authKey = 'maisiniapi';
    clientService = 'frontend-client';

    constructor(public http: Http) {
        console.log('Call ApiService Provider');
    }

    getCategoryList() {
        console.log('getCategoryList');

        if (this.data) {
            return Promise.resolve(this.data);
        }

        let headers = new Headers({
            'Content-Type': this.contentType,
            'Auth-key': this.authKey,
            'Client-Service': this.clientService
        });
        let options = new RequestOptions({
            headers: headers,
            method: RequestMethod.Get
        });

        return new Promise(resolve => {
            this.http.get(this.baseUrl+'/category', options)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    console.log(this.data);
                    resolve(this.data);
                });
        });
    }

    getProductList() {
        console.log('getProductList');
        if (this.data) {
            return Promise.resolve(this.data);
        }

        let headers = new Headers({
            'Content-Type': this.contentType,
            'Auth-key': this.authKey,
            'Client-Service': this.clientService
        });
        let options = new RequestOptions({
            headers: headers,
            method: RequestMethod.Get
        });

        return new Promise(resolve => {
            this.http.get(this.baseUrl+'/products', options)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    console.log(this.data);
                    resolve(this.data);
                });
        });
    }
}
