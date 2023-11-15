/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecondService } from './second.service';

describe('Service: Second', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondService]
    });
  });

  it('should ...', inject([SecondService], (service: SecondService) => {
    expect(service).toBeTruthy();
  }));
});
