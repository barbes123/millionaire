import React from 'react';

interface OptionCardProps {
  label: string; // A, B, C, D
  text: string;
  status: 'idle' | 'correct' | 'wrong' | 'disabled';
  onClick: () => void;
  disabled?: boolean;
}

export const OptionCard: React.FC<OptionCardProps> = ({ 
  label, 
  text, 
  status, 
  onClick,
  disabled 
}) => {
  
  let styles = "relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ";
  
  switch (status) {
    case 'idle':
      styles += "bg-slate-800/80 border-slate-600 hover:bg-slate-700 hover:border-blue-400 text-white";
      break;
    case 'correct':
      styles += "bg-green-600 border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.5)] text-white scale-[1.02] z-10";
      break;
    case 'wrong':
      styles += "bg-red-900/80 border-red-600 text-gray-300 opacity-60";
      break;
    case 'disabled':
      styles += "bg-slate-900/50 border-slate-800 text-gray-500 cursor-not-allowed";
      break;
  }

  return (
    <div 
      onClick={!disabled ? onClick : undefined}
      className={styles}
    >
      <div className={`
        flex items-center justify-center w-10 h-10 rounded-full mr-4 font-bold font-mono text-lg border
        ${status === 'correct' ? 'bg-white text-green-700 border-transparent' : 'bg-slate-900/50 border-slate-500 text-game-accent'}
      `}>
        {label}
      </div>
      <span className="text-lg md:text-xl font-semibold leading-tight">{text}</span>
      
      {/* Decorative hexagonal lines typical of quiz shows */}
      <div className="absolute top-1/2 -left-1 w-2 h-8 bg-current opacity-20 -translate-y-1/2 rounded-r" />
      <div className="absolute top-1/2 -right-1 w-2 h-8 bg-current opacity-20 -translate-y-1/2 rounded-l" />
    </div>
  );
};

