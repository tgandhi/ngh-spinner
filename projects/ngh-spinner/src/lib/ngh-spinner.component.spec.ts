import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghSpinnerComponent } from './ngh-spinner.component';

describe('NghSpinnerComponent', () => {
  let component: NghSpinnerComponent;
  let fixture: ComponentFixture<NghSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
