import React, { useMemo } from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  disabled: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, disabled }) => {
  const letters = ['a', 'b', 'c', 'd'];
  
  const randomizedOptions = useMemo(() => {
    const options = [...question.options];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }, [question]);

  const handleAnswer = (option: string) => {
    const correct = option === question.correct;
    onAnswer(correct);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl question-text text-gray-800 mb-6">
        {question.text}
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {randomizedOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={disabled}
            className={`
              p-4 text-left rounded-lg transition-all
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:scale-102'}
              bg-gradient-to-r from-purple-100 to-pink-100
              border-2 border-purple-300
              focus:outline-none focus:ring-2 focus:ring-purple-500
              active:from-purple-200 active:to-pink-200
              pixel-button flex items-start gap-4
            `}
          >
            <span className="inline-flex items-center justify-center bg-purple-200 rounded-full w-8 h-8 font-bold text-purple-700">
              {letters[index]})
            </span>
            <span className="flex-1">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;