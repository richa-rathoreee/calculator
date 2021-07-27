import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { CalccComponent } from './calcc/calcc.component';
import { StringComponent } from './string/string.component';
// import { CalBodyComponent } from './cal-body/cal-body.component';
import { ToggleComponent } from './toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CalccComponent,
    StringComponent,
    // CalBodyComponent,
    ToggleComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
