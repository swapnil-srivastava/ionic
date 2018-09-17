import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera-native',
  templateUrl: 'camera-native.html',
})
export class CameraNativePage {

  imgSource: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraNativePage');
  }

  startNative() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      // targetHeight: 500,
      // targetWidth: 500,
      // saveToPhotoAlbum: false
    }

    this.camera.getPicture(options)
      .then((imageURI) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // console.log('image', this.imgSource);
      let base64Image = 'data:image/jpeg;base64,' + imageURI;

      this.imgSource = base64Image;

     }, (err) => {
       // Handle error
       console.log('error occrureed while getting picture', err);
     });


  }

}
