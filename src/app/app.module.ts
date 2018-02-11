import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { StringInputComponent } from './string-input/string-input.component';
import { ChoiceInputComponent } from './choice-input/choice-input.component';
import { RolloverShowDirective } from './rollover-show.directive';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StringInputComponent,
    ChoiceInputComponent,
    RolloverShowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
