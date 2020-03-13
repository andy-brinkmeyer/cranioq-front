import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLandingComponent } from './parent-landing.component';

describe('ParentLandingComponent', () => {
  let component: ParentLandingComponent;
  let fixture: ComponentFixture<ParentLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
