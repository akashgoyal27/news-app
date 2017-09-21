import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http' ;
import 'rxjs/add/operator/toPromise';

import { FavouriteList } from '../Favourite.list';

@Injectable()
export class FavouriteListService {

 constructor(private http:Http) { }

 private headers = new Headers({'Content-Type':'application/json'});


 create(favNewsData:FavouriteList){
   console.log("create called");
   return this.http
     .post("http://localhost:58781/api/values", favNewsData,{headers: this.headers})
     .toPromise()
     .catch(this.handleError);
 }
 display(){
 	return this.http.get("http://localhost:58781/api/values").map(response => response.json());
 }
 delete(id:number){
 		return this.http.delete(`http://localhost:58781/api/values/`+id,{headers:this.headers}).subscribe();
 }
 update(obj:any){
 	return this.http.put(`http://localhost:58781/api/values/${obj.id}`,JSON.stringify(obj),{headers:this.headers}).subscribe();
 }

      private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }

}