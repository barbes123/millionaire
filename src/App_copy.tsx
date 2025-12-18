
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { GamePhase, GameMode, Language, HintsState, QuestionData } from './types';
import { SOUNDS } from './constants';
import { QUESTIONS_EN } from './constants_en';
import { QUESTIONS_RU } from './constants_ru';
import { playBGM, playSFX, stopBGM, stopSFX, stopAll, setGlobalMute } from './utils/audioManager';
import { Button } from './components/Button';
import { OptionCard } from './components/OptionCard';
import { 
  Users, User, Volume2, VolumeX, Trophy, ArrowRight, ArrowLeft, 
  RefreshCw, XCircle, LayoutGrid, AlertCircle, Play, Globe, 
  BarChart3, Upload, CheckCircle2 
} from 'lucide-react';

interface QuestionHistory {
  wrong: string[];
  isCorrect: boolean;
  attempts: number;
}

const translations = {
  en: {
    title: "Christmas Family Quiz",
    player1: "Team 1",
    player2: "Team 2",
    startGame: "Start Game",
    chooseCategory: "Choose Category",
    startInOrder: "Start from Beginning",
    showScore: "Scoreboard",
    backToSetup: "Main Menu",
    newCategory: "New Category",
    clickToContinue: "Press Space or Click to continue",
    gameOver: "Merry Christmas!",
    newGame: "Reset Game",
    turnFor: "Turn for",
    pts: "pts",
    correct: "Correct!",
    nextQuestion: "Next Question",
    categories: "Topics",
    quitTitle: "Exit Game?",
    currentScoreboard: "Current Scores",
    continue: "Continue",
    completed: "Done",
    startQuiz: "Start",
    cancel: "Cancel",
    yes: "Yes",
    loadQuestions: "Load JSON",
    langTooltip: "Switch Language"
  },
  ru: {
    title: "Новогодняя Викторина",
    player1: "Команда 1",
    player2: "Команда 2",
    startGame: "Начать игру",
    chooseCategory: "Выберите тему",
    startInOrder: "Начать сначала",
    showScore: "Счет",
    backToSetup: "В начало",
    newCategory: "Новая тема",
    clickToContinue: "Нажмите пробел или кликните",
    gameOver: "С Рождеством!",
    newGame: "Заново",
    turnFor: "Ход",
    pts: "очк.",
    correct: "Верно!",
    nextQuestion: "Дальше",
    categories: "Темы",
    quitTitle: "Выйти?",
    currentScoreboard: "Текущий счет",
    continue: "Продолжить",
    completed: "Пройдено",
    startQuiz: "Начать",
    cancel: "Отмена",
    yes: "Да",
    loadQuestions: "Загрузить JSON",
    langTooltip: "Сменить язык"
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [phase, setPhase] = useState<GamePhase>(GamePhase.SETUP);
  const [mode, setMode] = useState<GameMode>(GameMode.TWO_PLAYER);
  const [isMuted, setIsMuted] = useState(false);
  const t = translations[lang];
  
  const [team1Name, setTeam1Name] = useState("Team 1");
  const [team2Name, setTeam2Name] = useState("Team 2");
  const [scores, setScores] = useState<{ p1: number, p2: number }>({ p1: 0, p2: 0 });
  const [customQuestions, setCustomQuestions] = useState<QuestionData[] | null>(null);

  // Dynamic question selection based on language state
  const questions = useMemo(() => {
    const rawSet = customQuestions ? customQuestions : (lang === 'en' ? QUESTIONS_EN : QUESTIONS_RU);
    return [...rawSet].sort((a, b) => {
      if (a.topic === b.topic) return a.id - b.id;
      return a.topic.localeCompare(b.topic);
    });
  }, [lang, customQuestions]);

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [history, setHistory] = useState<Record<number, QuestionHistory>>({});
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  const currentHistory = useMemo(() => 
    history[currentQIndex] || { wrong: [], isCorrect: false, attempts: 0 }
  , [history, currentQIndex]);

  const currentQuestion = questions[currentQIndex];

  useEffect(() => {
    setGlobalMute(isMuted);
  }, [isMuted]);

  const getActiveTeam = () => {
    if (mode === GameMode.SINGLE_PLAYER) return 1;
    const isOddQuestion = (currentQIndex + 1) % 2 !== 0;
    const starter = isOddQuestion ? 1 : 2;
    const other = isOddQuestion ? 2 : 1;
    
    if (currentHistory.attempts === 0) return starter;
    if (currentHistory.attempts === 1) return other;
    return starter;
  };

  const calculatePoints = () => {
    if (currentHistory.attempts === 0) return 3;
    if (currentHistory.attempts === 1) return 2;
    if (currentHistory.attempts === 2) return 1;
    return 0;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setCustomQuestions(Array.isArray(json) ? json : Object.values(json));
      } catch (err) { alert("Invalid JSON"); }
    };
    reader.readAsText(file);
  };

  const handleAnswer = (option: string) => {
    if (!currentQuestion || currentHistory.isCorrect || currentHistory.wrong.includes(option)) return;
    
    const isAnswerCorrect = option === currentQuestion.right_answer;
    if (isAnswerCorrect) {
      stopBGM();
      playSFX(currentQuestion.correct_sound || SOUNDS.CORRECT);
      const points = calculatePoints();
      const activeTeam = getActiveTeam();
      setScores(prev => ({
        ...prev,
        [activeTeam === 1 ? 'p1' : 'p2']: prev[activeTeam === 1 ? 'p1' : 'p2'] + points
      }));
      setHistory(prev => ({
        ...prev,
        [currentQIndex]: { ...currentHistory, isCorrect: true }
      }));
      setPhase(GamePhase.EXTRA_INFO);
    } else {
      playSFX(currentQuestion.wrong_sound || SOUNDS.WRONG);
      setHistory(prev => ({
        ...prev,
        [currentQIndex]: { 
          ...currentHistory, 
          wrong: [...currentHistory.wrong, option],
          attempts: currentHistory.attempts + 1
        }
      }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      const nextIndex = currentQIndex + 1;
      const nextQ = questions[nextIndex];
      const prevQ = questions[currentQIndex];
      setCurrentQIndex(nextIndex);
      
      if (nextQ.topic !== prevQ.topic) {
        setPhase(GamePhase.SCOREBOARD);
      } else {
        setPhase(GamePhase.QUESTION);
        if (nextQ.sound) playBGM(nextQ.sound, false);
      }
    } else {
      setPhase(GamePhase.GAME_OVER);
      playSFX(SOUNDS.WIN);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentHistory.isCorrect && (e.code === 'Space' || e.key === 'Enter')) {
        if (phase === GamePhase.QUESTION) setPhase(GamePhase.EXTRA_INFO);
        else handleNextQuestion();
        return;
      }
      if (phase === GamePhase.TOPIC_INTRO || phase === GamePhase.SCOREBOARD) {
        if (e.code === 'Space' || e.key === 'Enter') {
          setPhase(phase === GamePhase.SCOREBOARD ? GamePhase.TOPIC_INTRO : GamePhase.QUESTION);
          if (currentQuestion?.sound) playBGM(currentQuestion.sound, false);
        }
        return;
      }
      if (phase !== GamePhase.QUESTION) return;
      
      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) handleAnswer(key);
      if (e.key === 'ArrowRight') handleNextQuestion();
      if (e.key === 'ArrowLeft' && currentQIndex > 0) {
        setCurrentQIndex(prev => prev - 1);
        const prevQ = questions[currentQIndex - 1];
        if (prevQ && prevQ.sound) playBGM(prevQ.sound, false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, currentQIndex, questions, currentHistory]);

  const AudioToggle = () => (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <button 
        onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
        className="bg-slate-800 p-4 rounded-full border-2 border-slate-600 hover:border-game-accent transition-all shadow-xl flex items-center justify-center group"
        title={t.langTooltip}
      >
        <Globe size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={() => setIsMuted(!isMuted)} 
        className="bg-slate-800 p-4 rounded-full border-2 border-slate-600 hover:border-game-accent transition-all shadow-xl flex items-center justify-center"
      >
        {isMuted ? <VolumeX className="text-red-400" /> : <Volume2 className="text-game-accent" />}
      </button>
    </div>
  );

  if (phase === GamePhase.SETUP) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-game-dark p-4">
        <AudioToggle />
        <div className="max-w-xl w-full bg-slate-800/50 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <h1 className="text-5xl font-black text-center mb-10 text-game-accent drop-shadow-lg">{t.title}</h1>
          <div className="space-y-8">
            <div className="flex gap-4 p-2 bg-slate-900/80 rounded-xl">
              <button onClick={() => setMode(GameMode.SINGLE_PLAYER)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all ${mode === GameMode.SINGLE_PLAYER ? 'bg-indigo-600 shadow-lg' : 'text-gray-500'}`}><User size={20}/> 1 Player</button>
              <button onClick={() => setMode(GameMode.TWO_PLAYER)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all ${mode === GameMode.TWO_PLAYER ? 'bg-indigo-600 shadow-lg' : 'text-gray-500'}`}><Users size={20}/> 2 Players</button>
            </div>
            <div className="space-y-4">
              <input type="text" value={team1Name} onChange={(e) => setTeam1Name(e.target.value)} className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl outline-none focus:border-game-accent transition-all text-white" placeholder={t.player1} />
              {mode === GameMode.TWO_PLAYER && <input type="text" value={team2Name} onChange={(e) => setTeam2Name(e.target.value)} className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl outline-none focus:border-game-accent transition-all text-white" placeholder={t.player2} />}
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-dashed border-slate-700 text-center">
              <label className="cursor-pointer text-indigo-400 hover:text-indigo-300 flex flex-col items-center gap-3 transition-colors">
                <Upload size={32} /> {t.loadQuestions} <input type="file" className="hidden" accept=".json" onChange={handleFileUpload} />
              </label>
            </div>
            <Button onClick={() => { setPhase(GamePhase.TOPICS_MENU); playBGM(SOUNDS.TOPIC, true); }} className="w-full text-2xl h-16">{t.startGame}</Button>
            <button onClick={() => setLang(lang === 'en' ? 'ru' : 'en')} className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-white transition-colors"><Globe size={20}/> {t.langTooltip}: {lang.toUpperCase()}</button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === GamePhase.TOPICS_MENU) {
    return (
      <div className="min-h-screen bg-game-dark p-8 flex flex-col items-center justify-center">
        <AudioToggle />
        <h1 className="text-4xl font-bold mb-12 text-game-accent flex items-center gap-3"><LayoutGrid size={32} /> {t.chooseCategory}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {Array.from(new Set(questions.map(q => q.topic))).map(topicId => {
            const firstOfTopic = questions.find(q => q.topic === topicId);
            const completed = questions.filter(q => q.topic === topicId).every(q => history[questions.indexOf(q)]?.isCorrect);
            return (
              <button key={topicId} onClick={() => { 
                const idx = questions.findIndex(q => q.topic === topicId);
                setCurrentQIndex(idx);
                setPhase(GamePhase.TOPIC_INTRO);
                stopBGM();
              }} className={`p-10 rounded-2xl border-2 transition-all text-left group ${completed ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-800/50 border-white/5 hover:border-game-accent hover:bg-slate-800'}`}>
                <div className="flex justify-between items-start">
                  <h3 className={`text-3xl font-bold mb-2 ${completed ? 'text-slate-600' : 'text-white'}`}>{firstOfTopic?.topicName}</h3>
                  {completed && <CheckCircle2 className="text-green-600" />}
                </div>
                <span className={`text-xs uppercase font-bold tracking-widest ${completed ? 'text-slate-800' : 'text-indigo-400'}`}>{completed ? t.completed : t.startQuiz}</span>
              </button>
            );
          })}
        </div>
        <Button variant="secondary" onClick={() => { stopAll(); setPhase(GamePhase.SETUP); }} className="mt-12">{t.backToSetup}</Button>
      </div>
    );
  }

  if (phase === GamePhase.TOPIC_INTRO) {
    return (
      <div onClick={() => setPhase(GamePhase.QUESTION)} className="min-h-screen flex flex-col items-center justify-center bg-game-dark cursor-pointer text-center p-8 animate-in fade-in zoom-in duration-500">
        <AudioToggle />
        <h2 className="text-2xl text-indigo-400 font-bold uppercase tracking-[0.3em] mb-4">{t.newCategory}</h2>
        <h1 className="text-8xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">{currentQuestion?.topicName}</h1>
        <p className="mt-20 text-slate-500 animate-bounce text-xl">{t.clickToContinue}</p>
      </div>
    );
  }

  if (phase === GamePhase.SCOREBOARD || phase === GamePhase.GAME_OVER) {
    return (
      <div onClick={() => phase === GamePhase.GAME_OVER ? setPhase(GamePhase.SETUP) : setPhase(GamePhase.TOPIC_INTRO)} className="min-h-screen bg-game-dark flex flex-col items-center justify-center cursor-pointer p-8">
        <AudioToggle />
        {phase === GamePhase.GAME_OVER && <Trophy size={100} className="text-game-accent mb-8 animate-pulse" />}
        <h1 className="text-6xl font-black mb-16 text-center">{phase === GamePhase.GAME_OVER ? t.gameOver : t.currentScoreboard}</h1>
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl justify-center">
            <div className={`p-10 rounded-3xl border-4 bg-slate-900/50 flex flex-col items-center transition-all ${getActiveTeam() === 1 ? 'border-game-accent shadow-2xl' : 'border-white/5 opacity-50'}`}>
                <span className="text-indigo-400 font-bold uppercase mb-4">{t.player1}</span>
                <span className="text-4xl font-black mb-4">{team1Name}</span>
                <span className="text-8xl font-mono font-black">{scores.p1}</span>
            </div>
            {mode === GameMode.TWO_PLAYER && (
                <div className={`p-10 rounded-3xl border-4 bg-slate-900/50 flex flex-col items-center transition-all ${getActiveTeam() === 2 ? 'border-game-accent shadow-2xl' : 'border-white/5 opacity-50'}`}>
                    <span className="text-indigo-400 font-bold uppercase mb-4">{t.player2}</span>
                    <span className="text-4xl font-black mb-4">{team2Name}</span>
                    <span className="text-8xl font-mono font-black">{scores.p2}</span>
                </div>
            )}
        </div>
        <p className="mt-20 text-slate-500 animate-pulse text-xl">{t.clickToContinue}</p>
      </div>
    );
  }

  const activeTeamName = getActiveTeam() === 1 ? team1Name : team2Name;

  return (
    <div className="min-h-screen bg-game-dark flex flex-col relative overflow-hidden">
      <AudioToggle />
      <div className="p-6 px-10 flex justify-between items-center bg-slate-900/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 shadow-xl">
        <div className="flex items-center gap-8">
          <button onClick={() => setShowQuitConfirm(true)} className="text-gray-500 hover:text-red-400 transition-colors"><XCircle size={24} /></button>
          <button onClick={() => setPhase(GamePhase.TOPICS_MENU)} className="text-gray-500 hover:text-indigo-400 transition-colors"><LayoutGrid size={24} /></button>
          <span className="font-mono text-xl text-indigo-400 font-bold">Q{currentQIndex + 1}/{questions.length}</span>
          <span className="text-xl font-black uppercase tracking-widest hidden md:inline">{currentQuestion?.topicName}</span>
        </div>
        <div className="flex items-center gap-8">
            <div className={`text-center transition-all ${getActiveTeam() === 1 ? 'scale-110' : 'opacity-30'}`}>
              <div className="text-[10px] font-black uppercase text-indigo-400">{team1Name}</div>
              <div className="text-3xl font-mono font-black text-white">{scores.p1}</div>
            </div>
            {mode === GameMode.TWO_PLAYER && (
              <div className={`text-center transition-all ${getActiveTeam() === 2 ? 'scale-110' : 'opacity-30'}`}>
                <div className="text-[10px] font-black uppercase text-indigo-400">{team2Name}</div>
                <div className="text-3xl font-mono font-black text-white">{scores.p2}</div>
              </div>
            )}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-5xl mx-auto w-full">
        {!currentHistory.isCorrect && (
          <div className="mb-8 px-8 py-3 bg-slate-800/80 rounded-full border border-game-accent flex items-center gap-4 animate-in slide-in-from-top duration-500 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-game-accent animate-ping" />
            <span className="text-xl font-black uppercase tracking-tighter">
                {t.turnFor} {activeTeamName} : {calculatePoints()} {t.pts}
            </span>
          </div>
        )}

        {currentQuestion?.image && (
          <div className="mb-10 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-h-[40vh] bg-black">
            <img src={currentQuestion.image} className="object-contain max-h-full max-w-full mx-auto" alt="Question" />
          </div>
        )}

        <div className="w-full bg-gradient-to-b from-slate-900 to-black border-x-2 border-y-4 border-slate-700 p-12 rounded-[3rem] text-center mb-12 shadow-2xl relative">
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">{currentQuestion?.question}</h2>
          {currentHistory.isCorrect && <p className="mt-8 text-green-400 font-bold animate-pulse text-xl uppercase tracking-widest">{t.clickToContinue}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {Object.entries(currentQuestion?.options || {}).map(([key, value]) => {
            let status: 'idle' | 'correct' | 'wrong' | 'disabled' = 'idle';
            if (currentHistory.isCorrect && key === currentQuestion.right_answer) status = 'correct';
            else if (currentHistory.wrong.includes(key)) status = 'wrong';
            else if (currentHistory.isCorrect) status = 'disabled';
            return <OptionCard key={key} label={key} text={value} status={status} onClick={() => handleAnswer(key)} disabled={currentHistory.isCorrect || currentHistory.wrong.includes(key)} />;
          })}
        </div>
      </div>

      {phase === GamePhase.EXTRA_INFO && (
        <div onClick={handleNextQuestion} className="fixed inset-0 z-[500] bg-black/90 backdrop-blur-xl flex items-center justify-center p-8 cursor-pointer animate-in fade-in duration-300">
          <div className="max-w-4xl w-full text-center" onClick={e => e.stopPropagation()}>
            <h3 className="text-6xl font-black text-green-400 mb-12 animate-bounce">{t.correct}</h3>
            {currentQuestion.image_extra && (
              <div className="mb-8 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-h-[30vh] mx-auto w-fit">
                <img src={currentQuestion.image_extra} className="object-contain max-h-full" alt="Extra" />
              </div>
            )}
            <div className="bg-slate-800/50 p-12 rounded-[3rem] border-2 border-white/5 text-3xl italic font-medium leading-relaxed mb-12 text-gray-200">
              {currentQuestion?.extra}
            </div>
            <Button onClick={handleNextQuestion} className="h-24 px-20 text-3xl flex items-center gap-6 mx-auto group">
              {t.nextQuestion} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      )}

      {showQuitConfirm && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <div className="bg-slate-900 border-2 border-indigo-500/30 rounded-[2rem] p-10 max-w-md w-full text-center">
                <AlertCircle size={64} className="text-indigo-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">{t.quitTitle}</h3>
                <div className="flex gap-4 mt-10">
                    <Button variant="secondary" className="flex-1" onClick={() => setShowQuitConfirm(false)}>{t.cancel}</Button>
                    <Button variant="danger" className="flex-1" onClick={() => { stopAll(); setPhase(GamePhase.SETUP); setShowQuitConfirm(false); }}>{t.yes}</Button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

