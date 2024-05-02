import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import {AppRoutingModule} from '../app-routing/app-routing.module'

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // Make sure RouterModule is imported here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
