import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NghSpinnerService {
  private spinnerChange = new Subject<boolean>();

  constructor() { }

  show() {
    this.spinnerChange.next(true);
  }

  hide(){
    this.spinnerChange.next(false);
  }

  getState(): Observable<any> {
    return this.spinnerChange.asObservable();
  }

}
