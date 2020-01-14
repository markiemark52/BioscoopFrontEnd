import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApiService', () => {
let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ApiService, HttpClient, HttpHandler ]
    });
    
    apiService = TestBed.get(ApiService);
  });

  it('should be created', () => {
      expect(apiService).toBeTruthy();
  });
});
