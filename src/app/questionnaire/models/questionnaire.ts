import { QuestionnaireTemplate, QuestionTemplate } from './templates';


interface Answer {
  question_id: number;
  answer: Array<string>;
}


export interface Question extends QuestionTemplate {
  answer: Array<string>;
}


export interface Questionnaire {
  id: number;
  patient_id: string;
  gp_id: number;
  email: string;
  access_id: string;
  completed_gp: boolean;
  completed_guardian: boolean;
  template: QuestionnaireTemplate;
  answers: Array<Answer>;
  created: string;
  review: Array<string>;

}
