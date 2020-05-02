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

  // Test that expects a GET Request to occur and provides a mock response - list of questionnaire ids with corresponding patient id
  it('getQuestionnaires() should provide a list of questionnaires via GET request', () => {
    const listQs: NotificationsResponse200[] = [{id: 1, patient_id: 'nhs1234'},
    {id: 2, patient_id: 'nhs1784'}, {id: 7, patient_id: 'nhs1904'}]; /* mock list of questionnaires*/

    service.getQuestionnaires().subscribe((data: NotificationsResponse200) => {
      expect(data).not.toBe(null);
      expect(JSON.stringify(data)).toEqual(JSON.stringify(listQs));
    });
    const req = httpTestingController.expectOne(environment.apiBaseUrl + '/quests/notify');
    expect(req.request.method).toBe('GET');
    // Respond with mock list of questionnaires
    req.flush(listQs);
  });

  // Test 403 error from GET request
  it('getQuestionnaires() test for 403 error', () => {
    const emsg = 'deliberate 403 error';

    service.getQuestionnaires().subscribe(data =>
    fail('should have failed with the 403 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(403, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    const req = httpTestingController.expectOne(environment.apiBaseUrl + '/quests/notify');
    expect(req.request.method).toBe('GET');
    // Respond with mock error
    req.flush(emsg, { status: 403, statusText: 'Forbidden' });
  });

  // Test that expects PUT request to occur - update to dismiss notitifcation
  it('remove(id) should update dismiss notification to be True via PUT request', () => {
    service.remove(8).subscribe((data: any) => {
        expect(data.dismiss).toBe(true);
      });
    const req = httpTestingController.expectOne(environment.apiBaseUrl + '/quests/notify/8',
    'put to api');
    expect(req.request.method).toBe('PUT');
    req.flush({dismiss: true});
  });

  // Test 400 error from PUT request
  it('remove(id) test for 400 error', () => {
    const emsg = 'deliberate 400 error';

    service.remove(8).subscribe(data =>
    fail('should have failed with the 400 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(400, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    const req = httpTestingController.expectOne(environment.apiBaseUrl + '/quests/notify/8',
    'put to api');
    expect(req.request.method).toBe('PUT');
    // Respond with mock error
    req.flush(emsg, { status: 400, statusText: 'Bad Request' });
  });

  it('updateData() should emitt list of questionnaires', () => {
    const listQs: NotificationsResponse200[] = [{id: 1, patient_id: 'nhs1234'},
    {id: 2, patient_id: 'nhs1784'}, {id: 7, patient_id: 'nhs1904'}];
    service.updateData().subscribe((data: NotificationsResponse200) => {
      expect(data).not.toBe(null);
      expect(JSON.stringify(data)).toEqual(JSON.stringify(listQs));
    });

    const req = httpTestingController.expectOne(environment.apiBaseUrl + '/quests/notify');
    expect(req.request.method).toBe('GET');
    // Respond with mock list of questionnaires
    req.flush(listQs);
  });

});
