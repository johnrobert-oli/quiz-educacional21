import { Question } from '../types';

interface UserResponse {
  questionId: number;
  correct: boolean;
  timeSpent: number;
  subject: string;
  difficulty: number;
}

export class QuizMLEngine {
  private userResponses: UserResponse[] = [];
  private subjectWeights: Record<string, number> = {
    math: 1,
    physics: 1,
    chemistry: 1,
    biology: 1
  };
  
  private difficultyWeights: number[] = [0.33, 0.33, 0.34]; // weights for difficulty levels 1, 2, 3

  addResponse(response: UserResponse): void {
    this.userResponses.push(response);
    this.updateWeights(response);
  }

  private updateWeights(response: UserResponse): void {
    const learningRate = 0.1;
    const { correct, subject, difficulty } = response;

    // Update subject weights
    if (correct) {
      this.subjectWeights[subject] *= (1 + learningRate);
    } else {
      this.subjectWeights[subject] *= (1 - learningRate);
    }

    // Normalize subject weights
    const totalWeight = Object.values(this.subjectWeights).reduce((a, b) => a + b, 0);
    Object.keys(this.subjectWeights).forEach(key => {
      this.subjectWeights[key] /= totalWeight;
    });

    // Update difficulty weights
    const diffIndex = difficulty - 1;
    if (correct) {
      this.difficultyWeights[diffIndex] *= (1 - learningRate);
      if (diffIndex < 2) {
        this.difficultyWeights[diffIndex + 1] *= (1 + learningRate);
      }
    } else {
      this.difficultyWeights[diffIndex] *= (1 - learningRate);
      if (diffIndex > 0) {
        this.difficultyWeights[diffIndex - 1] *= (1 + learningRate);
      }
    }

    // Normalize difficulty weights
    const totalDiffWeight = this.difficultyWeights.reduce((a, b) => a + b, 0);
    this.difficultyWeights = this.difficultyWeights.map(w => w / totalDiffWeight);
  }

  getNextQuestionRecommendation(questions: Question[]): Question {
    // Calculate scores for each question based on subject and difficulty weights
    const scores = questions.map(q => ({
      question: q,
      score: this.subjectWeights[q.subject] * this.difficultyWeights[q.difficulty - 1]
    }));

    // Add some randomness to prevent getting stuck in patterns
    const randomFactor = 0.2;
    scores.forEach(s => {
      s.score += Math.random() * randomFactor;
    });

    // Sort by score and return the highest scoring question
    scores.sort((a, b) => b.score - a.score);
    return scores[0].question;
  }

  getPerformanceAnalysis(): {
    strongestSubject: string;
    weakestSubject: string;
    recommendedDifficulty: number;
  } {
    const subjects = Object.entries(this.subjectWeights);
    subjects.sort((a, b) => b[1] - a[1]);

    const avgDifficulty = this.difficultyWeights.reduce(
      (acc, weight, index) => acc + weight * (index + 1),
      0
    );

    return {
      strongestSubject: subjects[0][0],
      weakestSubject: subjects[subjects.length - 1][0],
      recommendedDifficulty: Math.round(avgDifficulty)
    };
  }
}