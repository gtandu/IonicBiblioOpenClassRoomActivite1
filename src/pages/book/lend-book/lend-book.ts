import { MediasService } from './../../../services/media.service';
import { Book } from './../../../models/Book';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Book;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public mediasService: MediasService) {
  }

  ngOnInit() {
    this.index = this.navParams.get("index");
    this.book = this.mediasService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
