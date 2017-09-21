import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';

import 'rxjs/add/operator/map';
import{ChannelService}from '../services/channels.service';
import{NewsService}from '../services/news.service';


@Component({
  selector: 'channel-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ChannelService,NewsService]
})
export class SearchComponent implements OnInit{
  @Output() onClick1=new EventEmitter<any>();

  data:any={};
  source:any[];
  data1:any={};
  id:any;
  constructor(private channelservice:ChannelService,private newsservice:NewsService)
  {
    this.displayChannels();
  }
  ngOnInit(){

    //this.displayChannels();
    //this.displayNews(this.id);
  }
     displayChannels(){
      this.channelservice.searchChannel().subscribe(data=>{
          this.data=data;
      })
    }
      
      displayNews(id){
        console.log("Channel id :"+id);
      this.newsservice.searchNews(id).subscribe(data1=>{
          console.log("news data"+data1);
          this.data1=data1;
          this.source=data1.articles;
           this.onClick1.emit(this.source);
      });
     
  }
 }