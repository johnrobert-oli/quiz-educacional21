export interface Question {
  id: number;
  text: string;
  options: string[];
  correct: string;
  explanation: string;
  subject: 'math' | 'physics' | 'chemistry' | 'biology';
  difficulty: 1 | 2 | 3;
}