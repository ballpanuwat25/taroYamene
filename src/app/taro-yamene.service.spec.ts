import { TestBed } from '@angular/core/testing';

import { TaroYameneService } from './taro-yamene.service';

describe('TaroYameneService', () => {
  let service: TaroYameneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaroYameneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
