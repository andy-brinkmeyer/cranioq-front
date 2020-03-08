interface QuestionTemplate {
  type: string;
  question: string;
  description: string;
  answers: Array<string>;
}


export interface QuestionnaireTemplate {
  id: number;
  name: string;
  version: string;
  description: string;
  questions: Array<QuestionTemplate>;
}
