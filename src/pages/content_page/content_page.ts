import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";

@Component({
  selector: 'content-page',
  templateUrl: 'content_page.html'
})

export class ContentPage
{
  id : any;
  post : any;
  title : any;
  content : any;
  constructor(public navCtrl: NavController, public http: HttpProvider, public navParams: NavParams) {
    this.id = navParams.get('id');
    console.log(this.id);
    this.cargarPost();
  }

  cargarPost()
  {
    this.http.postById(this.id).then(res => {
      this.post = res;
      this.title = this.post.title.rendered;
      this.content = this.post.content.rendered;
      console.log(this.title)
    },
      error => {
        console.log(error);
      })
  }
}
