import { TestBed, inject } from '@angular/core/testing';

import { NghInterceptorService } from './ngh-interceptor.service';

describe('NghInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NghInterceptorService]
    });
  });

  it('should be created', inject([NghInterceptorService], (service: NghInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
