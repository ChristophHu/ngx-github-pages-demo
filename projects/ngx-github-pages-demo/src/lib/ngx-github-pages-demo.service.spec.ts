import { TestBed } from '@angular/core/testing';

import { NgxGithubPagesDemoService } from './ngx-github-pages-demo.service';

describe('NgxGithubPagesDemoService', () => {
  let service: NgxGithubPagesDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGithubPagesDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
