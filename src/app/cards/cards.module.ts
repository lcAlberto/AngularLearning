import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    MatSlideToggleModule,
  ],
  exports: [
    CardComponent,
  ]
})
export class CardsModule { }
