import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'parent-root',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
	search1:any;

  searchChannel(search:any){
  	this.search1=search;
  	console.log("Data in App comp:"+this.search1);
  }


  }
