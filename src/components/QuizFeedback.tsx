import React from 'react';
import { Brain } from 'lucide-react';

interface QuizFeedbackProps {
  isCorrect: boolean;
  explanation: string;
  onClose: () => void;
}

const QuizFeedback: React.FC<QuizFeedbackProps> = ({ isCorrect, explanation, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 p-4 z-50 animate-fade-in">
      <div className={`
        bg-gray-800/95 rounded-lg max-w-md w-full p-6 
        border-4 ${isCorrect ? 'border-green-500' : 'border-red-500'}
        pixel-art transform transition-all duration-200
      `}>
        <div className={`
          text-center p-4 mb-4 rounded-lg
          ${isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'}
        `}>
          <h3 className={`
            text-2xl font-bold mb-2
            ${isCorrect ? 'text-green-400' : 'text-red-400'}
          `}>
            {isCorrect ? '✨ Muito bem!' : '⚠ Não desista!'}
          </h3>
          
          <div className="mt-4 bg-black/30 p-4 rounded-lg">
            <p className="text-gray-200 leading-relaxed font-pixel">
              {explanation}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className={`
            w-full pixel-button py-3 px-6 rounded-lg
            text-white font-bold transition-all duration-200
            border-2 border-white/20
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-700 hover:to-pink-700
            focus:outline-none focus:ring-2 focus:ring-purple-500
            active:scale-95
          `}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default QuizFeedback;