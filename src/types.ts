
export interface QuestionData {
  id: number;
  question: string;
  topic: string;
  topicName: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  right_answer: "A" | "B" | "C" | "D";
  image?: string; // URL to image
  image_extra?: string; // URL to specific image for explanation
  sound?: string; // URL to question audio
  extra: string; // Info after correct answer
  correct_sound?: string; // URL
  wrong_sound?: string; // URL
}

export enum GamePhase {
  SETUP,
  TOPICS_MENU,
  TOPIC_INTRO,
  SCOREBOARD,
  QUESTION,
  EXTRA_INFO,
  GAME_OVER
}

export enum GameMode {
  SINGLE_PLAYER,
  TWO_PLAYER
}

export type Language = 'en' | 'ru';

export interface HintsState {
  fiftyFifty: boolean;
  callFriend: boolean;
  freeMistake: boolean;
}

export interface PlayerState {
  name: string;
  score: number;
  hints: HintsState;
}

