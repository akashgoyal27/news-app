import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {FavouriteListService}from '../services/favourite.service';
import {FavouriteList} from'../Favourite.list';


@Component({
  selector: 'favourite-list',
  templateUrl: './favouritelist.component.html',
  styleUrls: ['./favouritelist.component.css'],
})
export class FavouriteListComponent implements OnInit{
	data1:Array<any>;
	displaydata:Array<any>;
	constructor(private fav:FavouriteListService){}
	
	ngOnInit(){
		console.log("ngonit");
		this.displayFavourite();
	}
	displayFavourite(){
		this.fav.display().subscribe(data1=>{
          console.log("display favourite"+data1);
          this.data1=data1;
	})
}
deletenews(id:number){
	this.fav.delete(id);
	var ele = this.data1.find(f=>f.id==id);
  const index= this.data1.indexOf(ele);
  this.data1.splice(index,1);
}
updatenews(object:any,value:string){
	object.Review=value;
	this.fav.update(object);

}
}