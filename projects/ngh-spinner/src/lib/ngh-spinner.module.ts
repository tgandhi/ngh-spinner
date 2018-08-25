import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NghSpinnerComponent } from './ngh-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NghSpinnerComponent],
  exports: [NghSpinnerComponent]
})
export class NghSpinnerModule { }
