import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { StringInputComponent } from './string-input/string-input.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StringInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
