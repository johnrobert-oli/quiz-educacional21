import React, { useState } from 'react';
import { Car, Brain, Sparkles } from 'lucide-react';
import QuizCard from './components/QuizCard';
import ProgressTrack from './components/ProgressTrack';
import StartScreen from './components/StartScreen';
import EndScreen from './components/EndScreen';
import { questions } from './data/questions';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswer = (correct: boolean) => {
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(curr => curr + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 3000);
  };

  if (!gameStarted || quizCompleted) {
    if (quizCompleted) {
      return <EndScreen score={score} total={questions.length} onRestart={handleStart} />;
    }
    return <StartScreen onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 pixel-art">
          <h1 className="text-4xl font-bold text-white mb-2 pixel-shadow">
            <Sparkles className="inline-block mr-2" />
            Quiz Pixel Academy
          </h1>
          <p className="text-white/90 text-lg">Aprenda com diversão! 🎮</p>
        </header>

        <div className="relative">
          <ProgressTrack score={score} total={questions.length} />
          
          <div className="mt-8">
            <QuizCard
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              disabled={showFeedback}
            />
          </div>

          {showFeedback && (
            <div className={`fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50 animate-fade-in`}>
              <div className={`bg-white p-6 rounded-lg pixel-art max-w-md w-full transform transition-all ${isCorrect ? 'border-green-500' : 'border-red-500'} border-4`}>
                <div className="flex items-center gap-3 mb-4">
                  {isCorrect ? (
                    <Car className="w-6 h-6 text-green-500" />
                  ) : (
                    <Brain className="w-6 h-6 text-red-500" />
                  )}
                  <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {isCorrect ? 'Muito bem!' : 'Não desista!'}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {isCorrect 
                    ? 'Avançando para a próxima questão...' 
                    : questions[currentQuestion].explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;