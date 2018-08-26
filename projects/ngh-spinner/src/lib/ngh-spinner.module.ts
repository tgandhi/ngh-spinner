import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NghSpinnerComponent } from './ngh-spinner.component';
import { NghInterceptorService } from './ngh-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NghInterceptorService,
      multi: true
    }
    ],
  declarations: [NghSpinnerComponent],
  exports: [NghSpinnerComponent]
})
export class NghSpinnerModule { }
