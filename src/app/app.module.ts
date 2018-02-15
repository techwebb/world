import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { InputTypeComponent, DynamicChoiceComponent, DynamicStringComponent, DynamicDistributionComponent } from './input-type/input-type.component';
import { InputStringComponent } from './input-string/input-string.component';
import { InputChoiceComponent } from './input-choice/input-choice.component';
import { RolloverShowDirective } from './rollover-show.directive';
import { InputDistributionComponent } from './input-distribution/input-distribution.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    InputTypeComponent,
    InputStringComponent,
    InputChoiceComponent,
    RolloverShowDirective,
    DynamicChoiceComponent,
    DynamicStringComponent,
    DynamicDistributionComponent,
    InputDistributionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [
    DynamicStringComponent,
    DynamicChoiceComponent,
    DynamicDistributionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
