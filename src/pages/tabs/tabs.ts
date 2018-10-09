import { BookListPage } from './../book/book-list/book-list';
import { CdListPage } from './../cd/cd-list/cd-list';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  cdListPage = CdListPage;
  bookListPage = BookListPage; 

}
