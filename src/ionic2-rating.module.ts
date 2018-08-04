import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    Ionic2Rating
  ],
  exports: [
    Ionic2Rating
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Ionic2RatingModule { }
