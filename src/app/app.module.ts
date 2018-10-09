import { MediasService } from "./../services/media.service";
import { SettingsPage } from "./../pages/settings/settings";
import { TabsPage } from "./../pages/tabs/tabs";
import { LendCdPage } from "./../pages/cd/lend-cd/lend-cd";
import { LendBookPage } from "./../pages/book/lend-book/lend-book";
import { CdListPage } from "./../pages/cd/cd-list/cd-list";
import { BookListPage } from "./../pages/book/book-list/book-list";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";

@NgModule({
  declarations: [
    MyApp,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MediasService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
