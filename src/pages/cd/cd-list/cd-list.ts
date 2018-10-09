import { MediasService } from './../../../services/media.service';
import { ModalController, MenuController } from 'ionic-angular';
import { LendCdPage } from './../lend-cd/lend-cd';
import { Cd } from './../../../models/Cd';
import { Component } from '@angular/core';
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdsList: Cd[];

  constructor(private modalCtrl: ModalController, private menuCtrl : MenuController, public mediasService: MediasService) {
  }

  ionViewWillEnter(){

    this.cdsList = this.mediasService.cdsList.slice();
 
  }

  onLoadCd(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
