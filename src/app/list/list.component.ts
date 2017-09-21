import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';


@Component({
  selector: 'detail',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class DetailComponent{
	@Input() list:any;

	display(list:any){
		this.list=list;
	}
}