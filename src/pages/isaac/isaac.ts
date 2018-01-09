import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ContentPage } from "../content_page/content_page";

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

  postComplete(id)
  {
    console.log(id);
    this.navCtrl.push(ContentPage, {"id" : id});
  }

}


