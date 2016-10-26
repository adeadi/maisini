import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-range-location-modal',
  templateUrl: 'range-location-modal.html'
})
export class RangeLocationModal {

  constructor(public viewCtrl: ViewController) {}

  confirm() {
    this.viewCtrl.dismiss();
  }

}
