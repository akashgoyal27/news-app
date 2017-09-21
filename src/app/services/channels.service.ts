import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChannelService{
  constructor(private http: Http) {}
  searchChannel() {
    return this.http
               .get(`https://newsapi.org/v1/sources?language=en`)
               .map(response => response.json());
  }
}