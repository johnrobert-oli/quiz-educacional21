import React from 'react';

interface ProgressTrackProps {
  score: number;
  total: number;
}

const ProgressTrack: React.FC<ProgressTrackProps> = ({ score, total }) => {
  const progress = (score / total) * 100;
  
  return (
    <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2 px-2">
        <span className="text-white pixel-art text-sm">Progresso</span>
        <span className="text-white pixel-art text-sm">{score}/{total}</span>
      </div>
      <div className="relative h-12 bg-gray-200/50 rounded-lg overflow-hidden pixel-art backdrop-blur-sm border-2 border-white/20">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-grid opacity-20"></div>
        </div>
        
        {/* Track lines */}
        <div className="absolute inset-0 flex justify-between px-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-px h-full bg-white/10"></div>
          ))}
        </div>

        {/* Mustang car with glow effect */}
        <div
          className="absolute top-0 h-full transition-all duration-500 flex items-center"
          style={{ 
            left: `${progress}%`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/30 blur-lg rounded-full scale-150"></div>
            <div className="pixel-car">
              {/* Mustang-inspired pixel art car */}
              <div className="car-body"></div>
              <div className="car-stripe"></div>
              <div className="car-window"></div>
              <div className="car-wheel front"></div>
              <div className="car-wheel back"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrack;