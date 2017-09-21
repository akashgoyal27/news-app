import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import{RouterModule,Routes} from '@angular/router';
import{FormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent } from './list/list.component';
import { ParentComponent } from './Parent/parent.component';
import { FrontpageComponent } from './front/frontpage.component';

import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';

import { FavouriteListComponent } from './favouritelist/favouritelist.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/Search.component';
import{ChannelService}from './services/channels.service';
import{NewsService}from './services/news.service';
import {FavouriteListService}from './services/favourite.service';
const route:Routes=[
{path:'favourite-list' ,component: FavouriteListComponent},
{path:'app-root' ,component:AppComponent},
{path:'channel-search',component:SearchComponent},
{path:'parent-root',component:ParentComponent},
{path:'frontpage-root',component:FrontpageComponent},
{path:'login-root',component:LoginComponent},
{path:'register-root',component:RegisterComponent},

{path:'' ,redirectTo:'/frontpage-root',pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,SearchComponent,DisplayComponent,DetailComponent,FavouriteListComponent,ParentComponent,FrontpageComponent,LoginComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule.forRoot(route)
  ],
  providers: [ChannelService,NewsService,FavouriteListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
