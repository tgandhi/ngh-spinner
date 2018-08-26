import { Component, OnInit,OnDestroy,OnChanges, Input  } from '@angular/core';
import { Subscription } from 'rxjs';
import { NghSpinnerService } from './ngh-spinner.service';
@Component({
  selector: 'ngh-spinner',
  templateUrl:'ngh-spinner.component.html',
  styleUrls: ['ngh-spinner.component.css']
})
export class NghSpinnerComponent implements OnInit  {
  @Input() bgColor= 'rgba(0,0,0,0.5)'; //overlay background color
  @Input() color= '#2598db'; // spinner color
  @Input() type= 'circle-clip'; // spinner type
  showHide =false; // Show or Hide Loader

  subscription: Subscription;
  
  constructor(private spinnerService : NghSpinnerService) { 
    this.subscription =this.spinnerService.getState().subscribe( showHide => {this.showHide = showHide });
  }
  ngOnInit() {
    
  }



}
