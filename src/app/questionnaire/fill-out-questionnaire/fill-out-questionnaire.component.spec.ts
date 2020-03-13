import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillOutQuestionnaireComponent } from './fill-out-questionnaire.component';

describe('FillOutQuestionnaireComponent', () => {
  let component: FillOutQuestionnaireComponent;
  let fixture: ComponentFixture<FillOutQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillOutQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillOutQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
