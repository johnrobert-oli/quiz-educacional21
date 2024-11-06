import React from 'react';
import { Trophy, ArrowLeft, Star, Target } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EndScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, total, onRestart }) => {
  React.useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const confettiInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(confettiInterval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF0000', '#00FF00', '#0000FF']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF0000', '#00FF00', '#0000FF']
      });
    }, 150);

    return () => clearInterval(confettiInterval);
  }, []);

  const percentage = Math.round((score / total) * 100);
  let message = '';
  let color = '';

  if (percentage === 100) {
    message = 'Perfeito! Você é incrível! 🌟';
    color = 'from-yellow-400 to-yellow-600';
  } else if (percentage >= 70) {
    message = 'Muito bem! Continue assim! 🎉';
    color = 'from-green-400 to-green-600';
  } else if (percentage >= 50) {
    message = 'Bom trabalho! Pode melhorar! 💪';
    color = 'from-blue-400 to-blue-600';
  } else {
    message = 'Continue tentando! 💫';
    color = 'from-purple-400 to-purple-600';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 pixel-art">
        <div className="text-center">
          <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${color} mb-6`}>
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2 pixel-shadow text-gray-800">Quiz Completo!</h1>
          <p className="text-lg text-gray-600 mb-8">{message}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-500" />
                <span className="text-gray-700">Pontuação Total</span>
              </div>
              <span className="text-xl font-bold text-purple-600">{score}/{total}</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-gray-700">Porcentagem</span>
              </div>
              <span className="text-xl font-bold text-yellow-600">{percentage}%</span>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="w-full pixel-button bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-lg text-lg font-bold transition-all duration-200 hover:from-purple-600 hover:to-pink-600 flex items-center justify-center gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;