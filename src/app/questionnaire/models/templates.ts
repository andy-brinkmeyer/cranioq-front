export interface TemplateInformation {
  id: number;
  name: string;
  version: string;
  description: string;
}


export interface QuestionTemplate {
  id: number;
  type: string;
  category: string;
  question: string;
  description: string;
  answers: Array<string>;
  role: string;
}


export interface QuestionnaireTemplate {
  id: number;
  name: string;
  version: string;
  description: string;
  questions: Array<QuestionTemplate>;
}
