import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireOverviewComponent } from './questionnaire-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';


describe('QuestionnaireOverviewComponent', () => {
  let component: QuestionnaireOverviewComponent;
  let fixture: ComponentFixture<QuestionnaireOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ QuestionnaireOverviewComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// Arrange
// Act
// Assert