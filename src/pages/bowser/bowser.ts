import { Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bowser',
  templateUrl: 'bowser.html',
})
export class BowserPage implements OnInit {

  @ViewChild('videoElement') videoElement: ElementRef;
  video: any;
  displayControls: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BowserPage');
  }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }

  sound() {
    // this.initCamera({ video: true, audio: true });
  }

  initCamera(config: any) {
    const browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

  pause() {
    // this.video.pause();
  }

  toggleControls() {
    // this.video.controls = this.displayControls;
    // this.displayControls = !this.displayControls;
  }

  resume() {
    // this.video.play();
  }

}
