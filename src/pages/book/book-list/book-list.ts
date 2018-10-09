import { MediasService } from "./../../../services/media.service";
import { LendBookPage } from "./../lend-book/lend-book";
import { Book } from "./../../../models/Book";
import { Component } from "@angular/core";
import { ModalController, MenuController } from "ionic-angular";

@Component({
  selector: "page-book-list",
  templateUrl: "book-list.html"
})
export class BookListPage {
  bookList: Book[];

  constructor(
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    public mediasService: MediasService
  ) {}

  ionViewWillEnter() {
    this.bookList = this.mediasService.booksList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, { index: index });
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
