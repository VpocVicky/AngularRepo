import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mycomponent } from './Mycomponent';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,Mycomponent, LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
