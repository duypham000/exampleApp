import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetailPage } from "../user-detail/user-detail";


@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage implements OnInit {

  public userPage: any;
  public users : any[]= [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.users = this.navParams.get('key');
    this.userPage = UserDetailPage;
  }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad UsersPage');
  }
  showDetail(user){
    this.navCtrl.push(UserDetailPage, user);
  }

}
