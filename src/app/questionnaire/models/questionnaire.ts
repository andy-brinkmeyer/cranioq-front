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
  email: string;
  completed: boolean;
  template: QuestionnaireTemplate;
  answers: Array<Answer>;

}
