import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavouritesPage } from '../pages/favourites/favourites';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesPage } from '../pages/quotes/quotes';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  tabPage=TabsPage
  quotesPage=QuotesPage
  settingsPage=SettingsPage

  @ViewChild('nav') nav:NavController

  constructor(platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen,
     private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page:any)
  {
        //we need to replace the rootPage
        this.nav.setRoot(page)
        this.menuCtrl.close()
    }
}

