import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // image:any=''
  // public htmlImageFromCamera: string;
  constructor(private router: Router) { }
  // openCam(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    //alert(imageData)
  //    this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
  //   }, (err) => {
  //    // Handle error
  //    alert("error "+JSON.stringify(err))
  //   });
  // }
  login(){
this.router.navigate(['/login']);
  }
  purchase(){
    this.router.navigate(['/purchase']);
  }
  notification(){
    this.router.navigate(['/notifications']);
  }
}
