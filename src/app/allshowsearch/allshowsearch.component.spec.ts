import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshowsearchComponent } from './allshowsearch.component';

describe('AllshowsearchComponent', () => {
  let component: AllshowsearchComponent;
  let fixture: ComponentFixture<AllshowsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllshowsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllshowsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
