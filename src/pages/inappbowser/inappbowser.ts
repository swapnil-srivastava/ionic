import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-inappbowser',
  templateUrl: 'inappbowser.html',
})
export class InappbowserPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private inAppBrowser: InAppBrowser
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InappbowserPage');
  }

  openSelf() {
    const options : InAppBrowserOptions = {
      zoom: 'no'
    };

    // self browser
    // const browser = this.inAppBrowser.create('https://www.bing.com', '_self', options);
    this.inAppBrowser.create('https://www.bing.com', '_self', options);

    // browser event
    // browser.on('').subscribe();

  }

  openBlank() {
    const options : InAppBrowserOptions = {
      zoom: 'no'
    };

    // const browser = this.inAppBrowser.create('https://www.philips.co.in/', '_blank', options);
    this.inAppBrowser.create('https://www.philips.co.in/', '_blank', options);

    // browser event
    // browser.on('').subscribe();
  }

  openSystemBrowser() {
    const options : InAppBrowserOptions = {
      zoom: 'no'
    };

    // system browser
    // const browser = this.inAppBrowser.create('https://www.google.co.in/search?q=hello&rlz=1C5CHFA_enIN800IN801&oq=hello+&aqs=chrome..69i57.1785j0j7&sourceid=chrome&ie=UTF-8', '_system', options);
    this.inAppBrowser.create('https://www.google.co.in/search?q=hello&rlz=1C5CHFA_enIN800IN801&oq=hello+&aqs=chrome..69i57.1785j0j7&sourceid=chrome&ie=UTF-8', '_system', options);

  }





}
