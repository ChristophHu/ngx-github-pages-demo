import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGithubPagesDemoComponent } from './ngx-github-pages-demo.component';

describe('NgxGithubPagesDemoComponent', () => {
  let component: NgxGithubPagesDemoComponent;
  let fixture: ComponentFixture<NgxGithubPagesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGithubPagesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGithubPagesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
