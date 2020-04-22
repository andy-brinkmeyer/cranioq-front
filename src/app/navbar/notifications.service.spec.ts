import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NotificationsService } from './notifications.service';
import { environment } from '../../environments/environment';
import { NotificationsResponse200 } from './model';


describe('NotificationsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService],
      imports: [ HttpClientTestingModule ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);  /* Mock the HTTP backend */
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(NotificationsService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test that expects a GET Request to occur and provides a mock response

  it('getQuestionnaires should provide list of questionnaire ids', () => {
    const listQs: NotificationsResponse200[] = [{id: 1}, {id: 2}, {id: 7}]; /* mock list of questionnaire ids*/

    service.getQuestionnaires().subscribe((data: NotificationsResponse200) => {
      expect(data).not.toBe(null);
      expect(JSON.stringify(data)).toEqual(JSON.stringify(listQs));
    });
    const req = httpTestingController.expectOne(environment.apiBaseUrl + '/quests/notify');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(listQs);
  });

  /*it('should be created', () => {
    const service: NotificationsService = TestBed.get(NotificationsService);
    expect(service).toBeTruthy();
  });*/
});
