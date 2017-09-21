import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService{
  constructor(private http: Http) {}
  searchNews(temp:string){

  	console.log("Req came for: "+temp);
  	return this.http.get(`https://newsapi.org/v1/articles?source=${temp}&sortBy=top&apiKey=752f639cbd8941ef8925670b427c763f`)
  	.map(response =>response.json());
  }
}