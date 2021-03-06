import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  datos : any;
  path : string = 'http://www.culturacampeche.com/wp-json/wp/v2/posts?orderby=date&per_page=20';
  path_post: string = 'http://www.culturacampeche.com/wp-json/wp/v2/posts/';

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  loadUsers()
  {
    return this.http
      .get(this.path)
      .map(res => res.json(),
        err => {
          console.log(err);
        }).toPromise()
  }

  postById(id)
  {
    return this.http
      .get(this.path_post+id )
      .map(res => res.json(),
        err => {
          console.log(err)
        }).toPromise()
  }

}
