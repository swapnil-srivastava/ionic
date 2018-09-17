import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraNativePage } from '../pages/camera-native/camera-native';
import { BowserPage } from '../pages/bowser/bowser';
import { SafariPage } from '../pages/safari/safari';
import { InappbowserPage } from '../pages/inappbowser/inappbowser'
import { AndriodPage } from '../pages/andriod/andriod'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraNativePage,
    BowserPage,
    SafariPage,
    InappbowserPage,
    AndriodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraNativePage,
    BowserPage,
    SafariPage,
    InappbowserPage,
    AndriodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    InAppBrowser
  ]
})
export class AppModule {}
