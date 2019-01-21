import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from "../users/users";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public users: any[] = [
    {
      id : 1,
      name : "Abert",
      age : 15
    },
    {
      id : 2,
      name : "Alice",
      age : "23"
    }
  ];
  constructor(public navCtrl: NavController) {

  }
  onNavToUsers(){
    var params = { key : this.users};
    this.navCtrl.push(UsersPage, params, {
      direction: 'back',
      duration: 2000,
      easing : 'ease-out'
    })
  }
}
