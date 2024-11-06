import React from 'react';
import { Play, Trophy, Brain, Sparkles } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12 pixel-art">
          <h1 className="text-5xl font-bold text-white mb-4 pixel-shadow flex items-center justify-center gap-3">
            <Sparkles className="w-12 h-12" />
            Quiz Pixel Academy
          </h1>
          <p className="text-white/90 text-xl">Teste seus conhecimentos! 🎮</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Feature icon={Brain} title="Aprenda" description="Questões educativas e divertidas" />
            <Feature icon={Trophy} title="Conquiste" description="Acompanhe seu progresso" />
            <Feature icon={Play} title="Divirta-se" description="Interface pixel art única" />
          </div>

          <button
            onClick={onStart}
            className="w-full pixel-button bg-white/20 hover:bg-white/30 text-white py-4 px-8 rounded-lg text-xl font-bold transition-all duration-200 border-2 border-white/30 hover:border-white/40 flex items-center justify-center gap-3"
          >
            <Play className="w-6 h-6" />
            Começar Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

const Feature: React.FC<{
  icon: React.FC<any>;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="text-center text-white">
    <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-white/80">{description}</p>
  </div>
);

export default StartScreen;