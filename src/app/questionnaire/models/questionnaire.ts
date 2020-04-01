import { QuestionnaireTemplate } from './templates';


export interface Questionnaire {
  id: number;
  patient_id: string;
  email: string;
  completed: boolean;
  template: QuestionnaireTemplate;
}
