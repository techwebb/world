import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { InputTypeComponent, DynamicChoiceComponent, DynamicStringComponent } from './input-type/input-type.component';
import { InputStringComponent } from './input-string/input-string.component';
import { InputChoiceComponent } from './input-choice/input-choice.component';
import { RolloverShowDirective } from './rollover-show.directive';



@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    InputTypeComponent,
    InputStringComponent,
    InputChoiceComponent,
    RolloverShowDirective,
    DynamicChoiceComponent,
    DynamicStringComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [
    DynamicStringComponent,
    DynamicChoiceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
