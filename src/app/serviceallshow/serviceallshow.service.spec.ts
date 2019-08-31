import { TestBed } from '@angular/core/testing';

import { ServiceallshowService } from './serviceallshow.service';

describe('ServiceallshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceallshowService = TestBed.get(ServiceallshowService);
    expect(service).toBeTruthy();
  });
});
