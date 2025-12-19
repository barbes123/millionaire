
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
  BarChart3, Phone, Scissors, ShieldCheck, Timer, Upload, CheckCircle2,
  Maximize2, Minimize2   
} from 'lucide-react';

interface QuestionHistory {
  wrong: string[];
  isCorrect: boolean;
  attempts: number;
  freeMistakeWasUsedOn: number[]; // Tracks attempt indices that were protected
}

const translations = {
  en: {
    title: "Christmas Family Quiz",
    player1: "Team 1",
    player2: "Team 2",
    name: "Name",
    initialScore: "Start Score",
    startGame: "Start Game",
    chooseCategory: "Choose Category",
    startInOrder: "Start from First",
    showScore: "Scoreboard",
    backToSetup: "Main Menu",
    newCategory: "Category Transition",
    clickToContinue: "Press Space or Click to continue",
    gameOver: "Merry Christmas!",
    newGame: "Reset Game",
    turnFor: "Turn for",
    pts: "pts",
    correct: "Correct!",
    nextQuestion: "Next Question",
    categories: "Topics",
    quitTitle: "Exit Game?",
    quitMessage: "Score and progress will be lost.",
    currentScoreboard: "Current Scores",
    continue: "Continue",
    completed: "Done",
    startQuiz: "Start",
    cancel: "Cancel",
    yes: "Yes",
    startTimer: "Start Timer",
    callTimerTitle: "Call a Friend",
    freeMistakeActive: "Safe Attempt Active!",
    confirmHintTitle: "Use Hint?",
    confirmHintMessage: "Use the {hint} hint?",
    confirmGoTopics: "Exit to Categories?",
    confirmGoTopicsMsg: "Your current progress is saved.",
    hint5050: "50/50",
    hintCall: "Phone Call",
    hintMistake: "Safe Bet",
    loadQuestions: "Load JSON",
    done: "Finish",
    langTooltip: "Change language (EN/RU)",
    audioTooltip: "Toggle sound on/off",
    hintStatus: "Hints:"
  },
  ru: {
    title: "Новогодняя Викторина",
    player1: "Команда 1",
    player2: "Команда 2",
    name: "Имя",
    initialScore: "Нач. очки",
    startGame: "Начать игру",	
    chooseCategory: "Выберите тему",
    startInOrder: "По порядку",
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
    quitMessage: "Прогресс будет сброшен.",
    currentScoreboard: "Текущий счет",
    continue: "Продолжить",
    completed: "Пройдено",
    startQuiz: "Начать",
    cancel: "Отмена",
    yes: "Да",
    startTimer: "Начать",
    callTimerTitle: "Звонок другу",
    freeMistakeActive: "Право на ошибку!",
    confirmHintTitle: "Подсказка?",
    confirmHintMessage: "Использовать {hint}?",
    confirmGoTopics: "К выбору тем?",
    confirmGoTopicsMsg: "Прогресс будет сохранен.",
    hint5050: "50/50",
    hintCall: "Звонок",
    hintMistake: "Право на ошибку",
    loadQuestions: "Загрузить JSON",
    done: "Готово",
    langTooltip: "Сменить язык (EN/RU)",
    audioTooltip: "Вкл/Выкл звук",
    hintStatus: "Подсказки:"
  }
};

const initialHints: HintsState = {
  fiftyFifty: true,
  callFriend: true,
  freeMistake: true
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [phase, setPhase] = useState<GamePhase>(GamePhase.SETUP);
  const [mode, setMode] = useState<GameMode>(GameMode.TWO_PLAYER);
  const [isMuted, setIsMuted] = useState(false);
  const t = translations[lang];
  
  const [team1Name, setTeam1Name] = useState("Team 1");
  const [team2Name, setTeam2Name] = useState("Team 2");
  const [team1StartScore, setTeam1StartScore] = useState(0);
  const [team2StartScore, setTeam2StartScore] = useState(0);
  const [scores, setScores] = useState<{ p1: number, p2: number }>({ p1: 0, p2: 0 });
  const [gameQuestions, setGameQuestions] = useState<QuestionData[]>([]);
  
  const [playerHints, setPlayerHints] = useState<{ p1: HintsState, p2: HintsState }>({
    p1: { ...initialHints },
    p2: { ...initialHints }
  });

  const [freeMistakeActive, setFreeMistakeActive] = useState(false);
  const [callFriendActive, setCallFriendActive] = useState(false);
  const [callTimerValue, setCallTimerValue] = useState(32);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [pendingHint, setPendingHint] = useState<'fiftyFifty' | 'callFriend' | 'freeMistake' | null>(null);
  const [hoverTooltip, setHoverTooltip] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [showTopicsConfirm, setShowTopicsConfirm] = useState(false);
  const [customQuestions, setCustomQuestions] = useState<QuestionData[] | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

 /* const questions = useMemo(() => {
    const rawSet = customQuestions ? customQuestions : (lang === 'en' ? QUESTIONS_EN : QUESTIONS_RU);
    return [...rawSet].sort((a, b) => {
      if (a.topic === b.topic) return a.id - b.id;
      return a.topic.localeCompare(b.topic);
    });
  }, [lang, customQuestions]);*/
  
  const questions = useMemo(() => {
  const rawSet = customQuestions ? customQuestions : (lang === 'en' ? QUESTIONS_EN : QUESTIONS_RU);
  // Return as-is, no sorting
  return [...rawSet];
}, [lang, customQuestions]);

  const availableTopics = useMemo(() => {
    const topicOrder: string[] = [];
    const topicMap = new Map<string, string>();
    questions.forEach(q => {
      if (!topicMap.has(q.topic)) {
        topicMap.set(q.topic, q.topicName);
        topicOrder.push(q.topic);
      }
    });
    return topicOrder.map(id => ({ id, name: topicMap.get(id)! }));
  }, [questions]);

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [scoredIndices, setScoredIndices] = useState<number[]>([]);
  const [history, setHistory] = useState<Record<number, QuestionHistory>>({});

  const currentHistory = useMemo(() => 
    history[currentQIndex] || { wrong: [], isCorrect: false, attempts: 0, freeMistakeWasUsedOn: [] }
  , [history, currentQIndex]);

  const wrongAnswers = currentHistory.wrong;
  const isCorrect = currentHistory.isCorrect;
  const attemptsCount = currentHistory.attempts;
  const currentQuestion = questions[currentQIndex];

  const isTopicCompleted = (topicId: string) => {
    const topicQuestionsIndices = questions
      .map((q, idx) => (q.topic === topicId ? idx : -1))
      .filter(idx => idx !== -1);
    return topicQuestionsIndices.length > 0 && topicQuestionsIndices.every(idx => history[idx]?.isCorrect);
  };

  useEffect(() => {
    setGlobalMute(isMuted);
  }, [isMuted]);

  const getActiveTeam = () => {
    if (mode === GameMode.SINGLE_PLAYER) return 1;
    const isOddQuestion = (currentQIndex + 1) % 2 !== 0;
    const starter = isOddQuestion ? 1 : 2;
    const other = isOddQuestion ? 2 : 1;
    
    const protectedCount = currentHistory.freeMistakeWasUsedOn.length;
    const trueAttemptIndex = attemptsCount - protectedCount;

    if (trueAttemptIndex === 0) return starter;
    if (trueAttemptIndex === 1) return other;
    return starter;
  };

  const calculatePoints = () => {
    if (attemptsCount === 0) return 3;
    if (attemptsCount === 1) return 2;
    if (attemptsCount === 2) return 1;
    return 0;
  };

  const requestUseHint = (hintType: 'fiftyFifty' | 'callFriend' | 'freeMistake') => {
    if (phase !== GamePhase.QUESTION || isCorrect) return;
    if (hintType === 'fiftyFifty' && wrongAnswers.length > 0) return;
    setPendingHint(hintType);
  };

  const confirmHint = () => {
    if (!pendingHint) return;
    if (pendingHint === 'fiftyFifty') execute5050();
    else if (pendingHint === 'callFriend') executeCallFriend();
    else if (pendingHint === 'freeMistake') executeFreeMistake();
    setPendingHint(null);
  };

  const execute5050 = () => {
    const team = getActiveTeam();
    const hints = team === 1 ? playerHints.p1 : playerHints.p2;
    if (!hints.fiftyFifty || wrongAnswers.length > 0) return;
    playSFX(SOUNDS.HINT_5050);
    const options = ['A', 'B', 'C', 'D'];
    const wrongs = options.filter(o => o !== currentQuestion.right_answer);
    const toHide = wrongs.sort(() => 0.5 - Math.random()).slice(0, 2);
    setHistory(prev => ({
      ...prev,
      [currentQIndex]: { ...currentHistory, wrong: [...currentHistory.wrong, ...toHide] }
    }));
    setPlayerHints(prev => ({ ...prev, [team === 1 ? 'p1' : 'p2']: { ...hints, fiftyFifty: false } }));
  };

  const executeCallFriend = () => {
    const team = getActiveTeam();
    const hints = team === 1 ? playerHints.p1 : playerHints.p2;
    if (!hints.callFriend) return;
    playSFX(SOUNDS.HINT_CALL);
    setCallFriendActive(true);
    setCallTimerValue(32);
    setIsTimerRunning(false);
    setPlayerHints(prev => ({ ...prev, [team === 1 ? 'p1' : 'p2']: { ...hints, callFriend: false } }));
  };

  const executeFreeMistake = () => {
    const team = getActiveTeam();
    const hints = team === 1 ? playerHints.p1 : playerHints.p2;
    if (!hints.freeMistake || freeMistakeActive) return;
    playSFX(SOUNDS.HINT_MISTAKE);
    setFreeMistakeActive(true);
    setPlayerHints(prev => ({ ...prev, [team === 1 ? 'p1' : 'p2']: { ...hints, freeMistake: false } }));
  };

  const startCallTimer = () => {
    setIsTimerRunning(true);
    playBGM(SOUNDS.CALL_TIMER, false);
    timerRef.current = setInterval(() => {
      setCallTimerValue(prev => {
        if (prev <= 1) {
          stopCallFriend();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopCallFriend = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    stopBGM(); 
    setCallFriendActive(false);
    setIsTimerRunning(false);
    if (currentQuestion.sound) playBGM(currentQuestion.sound, false);
  };
  
  
  const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    // Enter fullscreen
    document.documentElement.requestFullscreen().then(() => {
      setIsFullscreen(true);
    }).catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
	      });
	    }
	  }
	};

  const handleStartGame = () => {
    stopAll();
    setScores({ p1: team1StartScore, p2: team2StartScore });
    setPlayerHints({ p1: { ...initialHints }, p2: { ...initialHints } });
    setScoredIndices([]);
    setHistory({});
    setCurrentQIndex(0);
    setPhase(GamePhase.TOPICS_MENU);
    playBGM(SOUNDS.TOPIC, true);
  };

  const handleSelectTopic = (topicId: string) => {
    stopBGM(); 
    const idx = questions.findIndex(q => q.topic === topicId);
    setCurrentQIndex(idx);
    setPhase(GamePhase.TOPIC_INTRO);
  };

  const handleAnswer = (option: string) => {
    if (isCorrect || wrongAnswers.includes(option) || callFriendActive || pendingHint) return;
    const activeTeam = getActiveTeam();
    const isAnswerCorrect = option === currentQuestion.right_answer;

    if (isAnswerCorrect) {
      stopBGM();
      playSFX(currentQuestion.correct_sound || SOUNDS.CORRECT);
      const points = calculatePoints();
      if (!scoredIndices.includes(currentQIndex)) {
        setScores(prev => ({
          ...prev,
          [activeTeam === 1 ? 'p1' : 'p2']: prev[activeTeam === 1 ? 'p1' : 'p2'] + points
        }));
        setScoredIndices(prev => [...prev, currentQIndex]);
      }
      setHistory(prev => ({
        ...prev,
        [currentQIndex]: { ...currentHistory, isCorrect: true }
      }));
      setPhase(GamePhase.EXTRA_INFO);
    } else {
      playSFX(currentQuestion.wrong_sound || SOUNDS.WRONG);
      if (freeMistakeActive) {
        setFreeMistakeActive(false);
        setHistory(prev => ({
          ...prev,
          [currentQIndex]: { 
            ...currentHistory, 
            wrong: [...currentHistory.wrong, option],
            attempts: currentHistory.attempts + 1,
            freeMistakeWasUsedOn: [...currentHistory.freeMistakeWasUsedOn, currentHistory.attempts]
          }
        }));
      } else {
        setHistory(prev => ({
          ...prev,
          [currentQIndex]: {
            ...currentHistory,
            wrong: [...currentHistory.wrong, option],
            attempts: currentHistory.attempts + 1
          }
        }));
      }
    }
  };
    
//  useEffect(() => {
  // Play music when topic screen becomes active
 // if (phase === GamePhase.TOPICS_MENU) {
   // playBGM(SOUNDS.TOPIC, false); // Play once
    
    // Return cleanup function to stop music
    //return () => {
     // stopBGM();
    //};
 // }
//}, [phase]); // This runs every time phase changes

useEffect(() => {
  if (phase === GamePhase.TOPICS_MENU || phase === GamePhase.TOPIC_INTRO) {
    playBGM(SOUNDS.TOPIC, false); // Play once
    
    return () => {
      stopBGM();
    };
  }
}, [phase]);

useEffect(() => {
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  document.addEventListener('fullscreenchange', handleFullscreenChange);
  
  return () => {
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
  };
}, []);


  const handleNextQuestion = () => {
    stopAll();
    setFreeMistakeActive(false);
    if (currentQIndex < questions.length - 1) {
      const nextIndex = currentQIndex + 1;
      const nextQ = questions[nextIndex];
      const prevQ = questions[currentQIndex];
      setCurrentQIndex(nextIndex);
      if (nextQ.topic !== prevQ.topic) setPhase(GamePhase.SCOREBOARD);
      else {
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
      if (callFriendActive || pendingHint || showQuitConfirm || showTopicsConfirm) return;
      if (isCorrect && (e.code === 'Space' || e.key === 'Enter')) {
        setPhase(GamePhase.EXTRA_INFO);
        return;
      }
      if (phase === GamePhase.EXTRA_INFO || phase === GamePhase.SCOREBOARD) {
        if (e.code === 'Space' || e.key === 'Enter' || e.key === 'ArrowRight') {
          if (phase === GamePhase.SCOREBOARD) setPhase(GamePhase.TOPIC_INTRO);
          else handleNextQuestion();
        }
        return;
      }
      if (phase === GamePhase.TOPIC_INTRO && (e.code === 'Space' || e.key === 'Enter')) {
        setPhase(GamePhase.QUESTION);
        if (currentQuestion.sound) playBGM(currentQuestion.sound, false);
        return;
      }
      if (phase !== GamePhase.QUESTION) return;
      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) handleAnswer(key);
      if (e.key === 'ArrowRight') handleNextQuestion();
      if (e.key === 'ArrowLeft' && currentQIndex > 0) {
           stopAll();
           setCurrentQIndex(prev => prev - 1);
           setPhase(GamePhase.QUESTION);
           if (questions[currentQIndex-1].sound) playBGM(questions[currentQIndex-1].sound, false);
      }
      if (e.key === 'F11' || (e.key === 'f' && e.ctrlKey)) {
	  e.preventDefault(); // Prevent browser's default F11 behavior
	  toggleFullscreen();
	}
    };    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, currentQIndex, questions, currentHistory, scoredIndices, callFriendActive, freeMistakeActive, pendingHint, isCorrect, showQuitConfirm, showTopicsConfirm]);

const AudioToggle = () => (
  <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 items-end">
    {hoverTooltip && (
      <div className="bg-black/90 text-white text-[10px] font-bold px-3 py-1 rounded border border-white/20 mb-1 animate-in fade-in slide-in-from-right-2">
        {hoverTooltip}
      </div>
    )}
    
    {/* Fullscreen Toggle Button */}
    <button 
      onMouseEnter={() => setHoverTooltip(isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen")}
      onMouseLeave={() => setHoverTooltip(null)}
      onClick={toggleFullscreen} 
      className="bg-slate-800 p-4 rounded-full border-2 border-slate-600 hover:border-purple-500 transition-all shadow-xl flex items-center justify-center"
    >
      {isFullscreen ? (
        <Minimize2 size={24} className="text-purple-400" />
      ) : (
        <Maximize2 size={24} className="text-purple-400" />
      )}
    </button>
    
    {/* Language Toggle Button */}
    <button 
      onMouseEnter={() => setHoverTooltip(t.langTooltip)}
      onMouseLeave={() => setHoverTooltip(null)}
      onClick={() => setLang(lang === 'en' ? 'ru' : 'en')} 
      className="bg-slate-800 p-4 rounded-full border-2 border-slate-600 hover:border-game-accent transition-all shadow-xl flex items-center justify-center"
    >
      <Globe size={24} className="text-blue-400" />
    </button>
    
    {/* Audio Toggle Button */}
    <button 
      onMouseEnter={() => setHoverTooltip(t.audioTooltip)}
      onMouseLeave={() => setHoverTooltip(null)}
      onClick={() => setIsMuted(!isMuted)} 
      className="bg-slate-800 p-4 rounded-full border-2 border-slate-600 hover:border-game-accent transition-all shadow-xl flex items-center justify-center"
    >
      {isMuted ? <VolumeX className="text-red-400" /> : <Volume2 className="text-game-accent" />}
    </button>
  </div>
);
  const HintSymbolsRow = ({ state }: { state: HintsState }) => (
    <div className="flex gap-4 items-center">
      <Scissors size={24} className={state.fiftyFifty ? 'text-indigo-400 drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]' : 'text-slate-600 opacity-20 grayscale'} />
      <Phone size={24} className={state.callFriend ? 'text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]' : 'text-slate-600 opacity-20 grayscale'} />
      <ShieldCheck size={24} className={state.freeMistake ? 'text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]' : 'text-slate-600 opacity-20 grayscale'} />
    </div>
  );

  const ScoreBoard = () => (
    <div className="space-y-6 w-full max-w-4xl">
      <div className={`bg-slate-800/80 p-10 rounded-[2rem] border-4 transition-all ${getActiveTeam() === 1 && !isCorrect ? 'border-game-accent shadow-[0_0_30px_rgba(255,215,0,0.3)]' : 'border-indigo-500/20'} flex flex-col`}>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">{t.player1}</span>
            <span className="text-4xl text-white font-black">{team1Name}</span>
            <div className="mt-2"><HintSymbolsRow state={playerHints.p1} /></div>
          </div>
          <span className="text-9xl font-mono text-white font-black drop-shadow-lg">{scores.p1}</span>
        </div>
      </div>
      {mode === GameMode.TWO_PLAYER && (
        <div className={`bg-slate-800/80 p-10 rounded-[2rem] border-4 transition-all ${getActiveTeam() === 2 && !isCorrect ? 'border-game-accent shadow-[0_0_30px_rgba(255,215,0,0.3)]' : 'border-indigo-500/20'} flex flex-col`}>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">{t.player2}</span>
              <span className="text-4xl text-white font-black">{team2Name}</span>
              <div className="mt-2"><HintSymbolsRow state={playerHints.p2} /></div>
            </div>
            <span className="text-9xl font-mono text-white font-black drop-shadow-lg">{scores.p2}</span>
          </div>
        </div>
      )}
    </div>
  );

  const HintConfirmModal = () => {
    if (!pendingHint) return null;
    let hintName = '';
    if (pendingHint === 'fiftyFifty') hintName = t.hint5050;
    else if (pendingHint === 'callFriend') hintName = t.hintCall;
    else if (pendingHint === 'freeMistake') hintName = t.hintMistake;
    return (
      <div className="fixed inset-0 z-[250] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
        <div className="bg-slate-900 border-2 border-game-accent/30 rounded-2xl p-8 max-w-sm w-full text-center">
          <AlertCircle size={48} className="text-game-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">{t.confirmHintTitle}</h3>
          <p className="text-slate-400 mb-8">{t.confirmHintMessage.replace('{hint}', hintName)}</p>
          <div className="flex gap-4">
            <Button variant="secondary" className="flex-1" onClick={() => setPendingHint(null)}>{t.cancel}</Button>
            <Button className="flex-1" onClick={confirmHint}>{t.yes}</Button>
          </div>
        </div>
      </div>
    );
  };

  const NavigationConfirmModal = ({ show, onConfirm, onCancel, title, message }: { show: boolean, onConfirm: () => void, onCancel: () => void, title: string, message: string }) => {
    if (!show) return null;
    return (
      <div className="fixed inset-0 z-[260] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
        <div className="bg-slate-900 border-2 border-indigo-500/50 rounded-2xl p-8 max-w-sm w-full text-center">
          <AlertCircle size={48} className="text-indigo-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-slate-400 mb-8">{message}</p>
          <div className="flex gap-4">
            <Button variant="secondary" className="flex-1" onClick={onCancel}>{t.cancel}</Button>
            <Button className="flex-1" onClick={onConfirm}>{t.yes}</Button>
          </div>
        </div>
      </div>
    );
  };

  if (phase === GamePhase.SETUP) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-game-dark via-game-mid to-black">
        <AudioToggle />
        <div className="max-w-xl w-full bg-slate-800/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-game-accent to-yellow-200 font-sans tracking-tight">{t.title}</h1>
          <div className="space-y-6">
            <div className="flex gap-4 justify-center bg-slate-900/50 p-2 rounded-lg">
              <button onClick={() => setMode(GameMode.SINGLE_PLAYER)} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${mode === GameMode.SINGLE_PLAYER ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}><User size={20} /> 1 Player</button>
              <button onClick={() => setMode(GameMode.TWO_PLAYER)} className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${mode === GameMode.TWO_PLAYER ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}><Users size={20} /> 2 Players</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 bg-slate-900/40 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold uppercase text-xs tracking-widest"><User size={14}/> {t.player1}</div>
                <div><label className="block text-xs text-gray-400 mb-1">{t.name}</label><input type="text" value={team1Name} onChange={(e) => setTeam1Name(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-game-accent" /></div>
                <div><label className="block text-xs text-gray-400 mb-1">{t.initialScore}</label><input type="number" min="0" value={team1StartScore} onChange={(e) => setTeam1StartScore(parseInt(e.target.value) || 0)} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-game-accent" /></div>
              </div>
              {mode === GameMode.TWO_PLAYER && (
                <div className="space-y-4 bg-slate-900/40 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold uppercase text-xs tracking-widest"><Users size={14}/> {t.player2}</div>
                  <div><label className="block text-xs text-gray-400 mb-1">{t.name}</label><input type="text" value={team2Name} onChange={(e) => setTeam2Name(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-game-accent" /></div>
                  <div><label className="block text-xs text-gray-400 mb-1">{t.initialScore}</label><input type="number" min="0" value={team2StartScore} onChange={(e) => setTeam2StartScore(parseInt(e.target.value) || 0)} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-game-accent" /></div>
                </div>
              )}
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-dashed border-slate-600 text-center">
              <label className="cursor-pointer text-sm text-indigo-400 hover:text-indigo-300 flex flex-col items-center gap-2">
                <Upload size={20} />{t.loadQuestions}<input type="file" className="hidden" accept=".json" onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    try {
                      const json = JSON.parse(event.target?.result as string);
                      if (Array.isArray(json)) setGameQuestions(json);
                      else if (typeof json === 'object') setGameQuestions(Object.values(json));
                    } catch (err) { alert("Invalid JSON"); }
                  };
                  reader.readAsText(file);
                }} />
              </label>
            </div>
            <Button onClick={handleStartGame} className="w-full text-lg mt-4">{t.startGame}</Button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === GamePhase.TOPICS_MENU) {
    return (
      <div className="min-h-screen bg-game-dark p-8 flex flex-col items-center">
        <AudioToggle />
        <NavigationConfirmModal show={showQuitConfirm} title={t.quitTitle} message={t.quitMessage} onConfirm={() => { stopAll(); setPhase(GamePhase.SETUP); setShowQuitConfirm(false); }} onCancel={() => setShowQuitConfirm(false)} />
        <h1 className="text-4xl font-bold mb-8 text-game-accent flex items-center gap-3"><LayoutGrid size={32} /> {t.chooseCategory}</h1>
        <div className="mb-10 w-full max-w-5xl flex flex-col md:flex-row justify-center gap-4">
          <Button onClick={() => { stopBGM(); setCurrentQIndex(0); setPhase(GamePhase.TOPIC_INTRO); }} className="px-12 text-xl flex items-center justify-center gap-3"><Play size={24} /> {t.startInOrder}</Button>
          <Button variant="secondary" onClick={() => setShowScoreModal(true)}><BarChart3 size={20} className="inline mr-2"/> {t.showScore}</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {availableTopics.map((topic) => {
            const completed = isTopicCompleted(topic.id);
            return (
              <button key={topic.id} onClick={() => handleSelectTopic(topic.id)} className={`p-8 rounded-2xl border-2 transition-all text-left group ${completed ? 'bg-slate-900 border-slate-800' : 'bg-slate-800 hover:border-game-accent'}`}>
                <div className="flex justify-between items-start">
                  <h3 className={`text-2xl font-bold ${completed ? 'text-slate-600' : 'text-white'}`}>{topic.name}</h3>
                  {completed && <CheckCircle2 className="text-green-600" size={24} />}
                </div>
                <p className={`mt-2 text-sm uppercase ${completed ? 'text-slate-700' : 'text-slate-400'}`}>{completed ? t.completed : t.startQuiz}</p>
              </button>
            );
          })}
        </div>
        <Button variant="secondary" className="mt-12" onClick={() => setShowQuitConfirm(true)}>{t.backToSetup}</Button>
        {showScoreModal && (
          <div className="fixed inset-0 z-[300] bg-black/80 flex items-center justify-center p-4" onClick={() => setShowScoreModal(false)}>
            <div className="bg-slate-900 border-2 border-game-accent/50 p-12 rounded-[3rem] max-w-5xl w-full shadow-2xl" onClick={e => e.stopPropagation()}>
               <h3 className="text-4xl font-black mb-12 text-center text-game-accent">{t.currentScoreboard}</h3>
               <ScoreBoard />
               <Button onClick={() => setShowScoreModal(false)} className="w-full mt-12 h-16 text-xl">{t.continue}</Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (phase === GamePhase.TOPIC_INTRO) {
    return (
      <div onClick={() => { setPhase(GamePhase.QUESTION); if (currentQuestion.sound) playBGM(currentQuestion.sound, false); }} className="min-h-screen flex flex-col items-center justify-center bg-game-dark cursor-pointer p-4 text-center">
        <AudioToggle />
        <h2 className="text-2xl text-indigo-300 uppercase tracking-widest mb-4">{t.newCategory}</h2>
        <h1 className="text-6xl md:text-8xl font-black text-white">{currentQuestion.topicName}</h1>
        <p className="mt-12 text-slate-400 animate-bounce text-xl">{t.clickToContinue}</p>
      </div>
    );
  }

  if (phase === GamePhase.SCOREBOARD) {
    return (
      <div onClick={() => setPhase(GamePhase.TOPIC_INTRO)} className="min-h-screen bg-game-dark flex flex-col items-center justify-center cursor-pointer p-4">
        <AudioToggle />
        <Trophy size={80} className="text-game-accent mb-6" />
        <h2 className="text-5xl font-black mb-16 text-white">{t.currentScoreboard}</h2>
        <ScoreBoard />
        <p className="mt-16 text-slate-400 animate-pulse text-xl">{t.clickToContinue}</p>
      </div>
    );
  }

  if (phase === GamePhase.GAME_OVER) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-game-dark p-4 text-center">
        <AudioToggle />
        <Trophy size={100} className="text-game-accent mb-6 animate-pulse" />
        <h1 className="text-6xl font-black mb-12 uppercase">{t.gameOver}</h1>
        <ScoreBoard />
        <div className="flex gap-4 mt-16">
          <Button variant="secondary" onClick={() => setPhase(GamePhase.TOPICS_MENU)}>{t.categories}</Button>
          <Button onClick={() => { stopAll(); setPhase(GamePhase.SETUP); }}><RefreshCw className="inline mr-2" /> {t.newGame}</Button>
        </div>
      </div>
    );
  }

  const activeTeamId = getActiveTeam();
  const activeTeamName = activeTeamId === 1 ? team1Name : team2Name;
  const potentialPoints = calculatePoints();

  return (
    <div className="min-h-screen bg-game-dark flex flex-col relative overflow-hidden">
      <AudioToggle />
      <HintConfirmModal />
      <NavigationConfirmModal show={showQuitConfirm} title={t.quitTitle} message={t.quitMessage} onConfirm={() => { stopAll(); setPhase(GamePhase.SETUP); setShowQuitConfirm(false); }} onCancel={() => setShowQuitConfirm(false)} />
      <NavigationConfirmModal show={showTopicsConfirm} title={t.confirmGoTopics} message={t.confirmGoTopicsMsg} onConfirm={() => { stopAll(); setPhase(GamePhase.TOPICS_MENU); setShowTopicsConfirm(false); }} onCancel={() => setShowTopicsConfirm(false)} />

      {/* CALL FRIEND UI - Pushed to the right side of the screen */}
      {callFriendActive && (
        <div className="fixed top-24 right-8 z-[250] w-full max-w-[320px] pointer-events-auto">
          <div className="bg-slate-900 border-4 border-blue-500 rounded-3xl p-6 text-center flex flex-col items-center shadow-[0_0_50px_rgba(59,130,246,0.4)] animate-in slide-in-from-right duration-300">
            <Phone size={48} className={`mb-4 ${isTimerRunning ? 'text-blue-400 animate-pulse' : 'text-slate-500'}`} />
            <h3 className="text-2xl font-black mb-2 text-white">{t.callTimerTitle}</h3>
            <div className="text-6xl font-mono text-white mb-6 bg-slate-800 px-6 py-3 rounded-2xl border border-white/5 shadow-inner">{callTimerValue}</div>
            {!isTimerRunning ? <Button onClick={startCallTimer} className="w-full"><Timer className="inline mr-2"/> {t.startTimer}</Button> : <Button variant="danger" onClick={stopCallFriend} className="w-full">{t.done}</Button>}
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/5 p-4 px-8 flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-6">
          <button onClick={() => setShowTopicsConfirm(true)} className="text-slate-500 hover:text-indigo-400 transition-colors"><LayoutGrid size={28} /></button>
          <div className="text-lg font-mono text-gray-400 font-bold">Q{currentQIndex + 1}/{questions.length} <span className="mx-3 text-slate-700">|</span> <span className="text-indigo-400 uppercase tracking-widest">{currentQuestion.topicName}</span></div>
        </div>
        
        <div className="flex gap-16 relative">
            {hoverTooltip && !hoverTooltip.includes('language') && !hoverTooltip.includes('audio') && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] font-bold px-3 py-1 rounded border border-white/20 z-[110] whitespace-nowrap">
                    {hoverTooltip}
                </div>
            )}
            {/* TEAM 1 HEADER STATUS */}
            <div className={`flex items-center gap-6 ${activeTeamId === 1 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="flex gap-2">
                    <button 
                        onMouseEnter={() => setHoverTooltip(t.hint5050)} onMouseLeave={() => setHoverTooltip(null)} 
                        onClick={() => requestUseHint('fiftyFifty')} 
                        disabled={!playerHints.p1.fiftyFifty || isCorrect || activeTeamId !== 1 || wrongAnswers.length > 0} 
                        className={`p-2 rounded-full border transition-all ${playerHints.p1.fiftyFifty && wrongAnswers.length === 0 ? 'border-indigo-400 text-indigo-400 hover:scale-110' : 'border-slate-800 text-slate-800'}`}
                    ><Scissors size={20}/></button>
                    <button 
                        onMouseEnter={() => setHoverTooltip(t.hintCall)} onMouseLeave={() => setHoverTooltip(null)} 
                        onClick={() => requestUseHint('callFriend')} 
                        disabled={!playerHints.p1.callFriend || isCorrect || activeTeamId !== 1} 
                        className={`p-2 rounded-full border transition-all ${playerHints.p1.callFriend ? 'border-blue-400 text-blue-400 hover:scale-110' : 'border-slate-800 text-slate-800'}`}
                    ><Phone size={20}/></button>
                    <button 
                        onMouseEnter={() => setHoverTooltip(t.hintMistake)} onMouseLeave={() => setHoverTooltip(null)} 
                        onClick={() => requestUseHint('freeMistake')} 
                        disabled={!playerHints.p1.freeMistake || isCorrect || activeTeamId !== 1} 
                        className={`p-2 rounded-full border transition-all ${playerHints.p1.freeMistake ? 'border-green-400 text-green-400 hover:scale-110' : 'border-slate-800 text-slate-800'}`}
                    ><ShieldCheck size={20}/></button>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase font-black tracking-tighter text-indigo-400">{team1Name}</span>
                    <span className="text-4xl font-mono text-white font-black">{scores.p1}</span>
                </div>
            </div>
            {/* TEAM 2 HEADER STATUS */}
            {mode === GameMode.TWO_PLAYER && (
                <div className={`flex items-center gap-6 ${activeTeamId === 2 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase font-black tracking-tighter text-indigo-400">{team2Name}</span>
                        <span className="text-4xl font-mono text-white font-black">{scores.p2}</span>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onMouseEnter={() => setHoverTooltip(t.hint5050)} onMouseLeave={() => setHoverTooltip(null)} 
                            onClick={() => requestUseHint('fiftyFifty')} 
                            disabled={!playerHints.p2.fiftyFifty || isCorrect || activeTeamId !== 2 || wrongAnswers.length > 0} 
                            className={`p-2 rounded-full border transition-all ${playerHints.p2.fiftyFifty && wrongAnswers.length === 0 ? 'border-indigo-400 text-indigo-400 hover:scale-110' : 'border-slate-800 text-slate-800'}`}
                        ><Scissors size={20}/></button>
                        <button 
                            onMouseEnter={() => setHoverTooltip(t.hintCall)} onMouseLeave={() => setHoverTooltip(null)} 
                            onClick={() => requestUseHint('callFriend')} 
                            disabled={!playerHints.p2.callFriend || isCorrect || activeTeamId !== 2} 
                            className={`p-2 rounded-full border transition-all ${playerHints.p2.callFriend ? 'border-blue-400 text-blue-400 hover:scale-110' : 'border-slate-800 text-slate-800'}`}
                        ><Phone size={20}/></button>
                        <button 
                            onMouseEnter={() => setHoverTooltip(t.hintMistake)} onMouseLeave={() => setHoverTooltip(null)} 
                            onClick={() => requestUseHint('freeMistake')} 
                            disabled={!playerHints.p2.freeMistake || isCorrect || activeTeamId !== 2} 
                            className={`p-2 rounded-full border transition-all ${playerHints.p2.freeMistake ? 'border-green-400 text-green-400 hover:scale-110' : 'border-slate-800 text-slate-800'}`}
                        ><ShieldCheck size={20}/></button>
                    </div>
                </div>
            )}
        </div>
        <button onClick={() => setShowQuitConfirm(true)} className="text-slate-500 hover:text-red-400 transition-colors"><XCircle size={28} /></button>
      </div>

      <div className={`flex-1 container mx-auto px-4 py-8 flex flex-col items-center justify-center max-w-4xl transition-all duration-500 ${callFriendActive ? 'opacity-60 scale-95 blur-[1px] pointer-events-none' : 'opacity-100 scale-100'}`}>
        {!isCorrect && (
          <div className="mb-8 flex flex-col items-center gap-2">
            <div className="px-6 py-2 bg-slate-800 rounded-full border border-game-accent flex items-center gap-3 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-game-accent animate-ping"></span>
              <span className="font-black uppercase tracking-tighter text-xl">{t.turnFor} {activeTeamName}: {potentialPoints} {t.pts}</span>
            </div>
            {freeMistakeActive && <span className="text-green-400 text-sm font-black animate-bounce uppercase tracking-widest">{t.freeMistakeActive}</span>}
          </div>
        )}
        {currentQuestion.image && (
          <div className="mb-6 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl max-h-[35vh]">
            <img src={currentQuestion.image} className="object-contain max-h-full max-w-full" alt="Question" />
          </div>
        )}
        <div className="w-full bg-gradient-to-b from-slate-800 to-slate-900 border-x-2 border-y-4 border-slate-600 p-8 md:p-12 rounded-3xl shadow-2xl text-center mb-10 relative">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-snug">{currentQuestion.question}</h2>
          {isCorrect && <p className="mt-4 text-green-400 font-black animate-pulse text-xl uppercase tracking-tighter">{t.clickToContinue}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {Object.entries(currentQuestion.options).map(([key, value]) => {
                let status: 'idle' | 'correct' | 'wrong' | 'disabled' = 'idle';
                if (isCorrect && key === currentQuestion.right_answer) status = 'correct';
                else if (wrongAnswers.includes(key)) status = 'wrong';
                else if (isCorrect) status = 'disabled';
                return <OptionCard key={key} label={key} text={value} status={status} onClick={() => handleAnswer(key)} disabled={isCorrect || wrongAnswers.includes(key)} />;
            })}
        </div>
        {phase === GamePhase.EXTRA_INFO && (
            <div className="fixed inset-0 z-[400] bg-black/1 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-slate-900 border-2 border-green-500 rounded-3xl p-8 max-w-3xl w-full shadow-2xl flex flex-col items-center">
                    <h3 className="text-5xl font-black text-green-400 mb-8 flex items-center gap-6">✓ {t.correct}</h3>
                    <div className="w-full flex flex-col gap-8 overflow-y-auto max-h-[65vh] px-4 custom-scrollbar">
                        {currentQuestion.image_extra && (
                          <div className="rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl mx-auto">
                             <img src={currentQuestion.image_extra} className="object-contain max-h-[40vh] w-full" alt="Explanation" />
                          </div>
                        )}
                        <div className="bg-slate-800/80 p-10 rounded-[2rem] border-2 border-white/5 text-center text-2xl md:text-3xl text-gray-100 italic font-semibold leading-relaxed">
                            {currentQuestion.extra}
                        </div>
                    </div>
                    <div className="mt-10 flex w-full gap-6">
                        <Button variant="secondary" onClick={() => setShowTopicsConfirm(true)} className="flex-1 text-xl">{t.categories}</Button>
                        <Button onClick={handleNextQuestion} className="flex-[2] h-20 text-2xl flex items-center justify-center gap-6">
                            {t.nextQuestion} <ArrowRight size={32} />
                        </Button>
                    </div>
                </div>
            </div>
        )}
        <div className="mt-12 flex gap-12 opacity-20 hover:opacity-100 transition-opacity">
            <button onClick={() => { if (currentQIndex > 0) { stopAll(); setCurrentQIndex(prev => prev - 1); setPhase(GamePhase.QUESTION); } }} disabled={currentQIndex === 0} className="p-4 bg-slate-800 rounded-full border border-slate-600 hover:text-white transition-colors shadow-lg"><ArrowLeft size={28} /></button>
            <button onClick={handleNextQuestion} className="p-4 bg-slate-800 rounded-full border border-slate-600 hover:text-white transition-colors shadow-lg"><ArrowRight size={28} /></button>
        </div>
      </div>
    </div>
  );
}

