import { MediasService } from './../../../services/media.service';
import { Cd } from './../../../models/Cd';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Cd;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public mediasService: MediasService) {
  }

  ngOnInit() {
    this.index = this.navParams.get("index");
    this.cd = this.mediasService.cdsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
