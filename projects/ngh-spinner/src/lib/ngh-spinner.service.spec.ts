import { TestBed, inject } from '@angular/core/testing';

import { NghSpinnerService } from './ngh-spinner.service';

describe('NghSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NghSpinnerService]
    });
  });

  it('should be created', inject([NghSpinnerService], (service: NghSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
