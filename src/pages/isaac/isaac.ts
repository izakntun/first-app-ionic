import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

@Component({
  selector: 'page-isaac',
  templateUrl: 'isaac.html'
})
export class IsaacPage {

  posts : any[];

  constructor(public navCtrl: NavController, public http : HttpProvider) {

  }

  cargarUsuarios()
  {
    this.http.loadUsers().then(res => {
      this.posts = res;
      console.log(res)
    },
     error => {
      console.log(error);
     });
  }

}


