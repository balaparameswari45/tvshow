import { TestBed } from '@angular/core/testing';

import { ServiceallshowService } from './serviceallshow.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServiceallshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
  }));

  it('should be created', () => {
    const service: ServiceallshowService = TestBed.get(ServiceallshowService);
    expect(service).toBeTruthy();
  });
});
