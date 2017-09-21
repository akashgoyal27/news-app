import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {FavouriteListService}from '../services/favourite.service';
import {FavouriteList} from'../Favourite.list';


@Component({
  selector: 'display-list',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent{
	@Input() displaylist:any;
	constructor(private Favourite:FavouriteListService){}
  data1:any;

	display1(list:any){
		this.displaylist=list;
	}
	title="";
	description="";
	urlToImage="" ;
 publishedAt="";
 author="";
  Review=null; 
	addFavourite(favnews:FavouriteList){
this.Favourite.create(favnews);
	}
	
}