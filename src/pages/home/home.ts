import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = 'Home App Tesing from app';

  constructor(
    public navCtrl: NavController
  ) {
  }

}
