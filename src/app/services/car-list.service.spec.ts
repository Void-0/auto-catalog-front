import { TestBed, inject } from '@angular/core/testing';

import { CarListService } from './car-list.service';

describe('CarListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarListService]
    });
  });

  it('should be created', inject([CarListService], (service: CarListService) => {
    expect(service).toBeTruthy();
  }));
});
