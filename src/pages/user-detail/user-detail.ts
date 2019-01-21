import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage implements OnInit{
  public user : any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
    onGoBack(){
      this.navCtrl.pop();
    }
  
    onGoHome(){
      this.navCtrl.popToRoot();
    }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad UserDetailPage');
  }
  ngOnInit(): void {
    this.user = this.navParams.data;
    
  }
  

}
