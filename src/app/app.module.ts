import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';
import { EventEmmiterComponent } from './event-emmiter/event-emmiter.component';
import { BtnEmmiterComponent } from './event-emmiter/btn-emmiter/btn-emmiter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TesteComponenteComponent, EventEmmiterComponent, BtnEmmiterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
