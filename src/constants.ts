import { QuestionData } from "./types";

const SB_URL = "https://zvbgylkmptmqbihcevmu.supabase.co/storage/v1/object/public/";
// NOTE: This is the structure requested. 
// In a real scenario, you might replace this with a file upload or fetch.

export const SOUNDS = {
  CORRECT: `${SB_URL}/sounds/yes.mp3`,
  WRONG: `${SB_URL}/sounds/no.mp3`,
  WIN: "https://actions.google.com/sounds/v1/cartoon/magic_chime.ogg", 
  TOPIC: `${SB_URL}/sounds/zastavka.mp3`,
  HINT_5050: `${SB_URL}/sounds/50_50.mp3`,
  HINT_CALL: `${SB_URL}/sounds/friend_hint.mp3`,
  HINT_MISTAKE: `${SB_URL}/sounds/q6-yes_defend.mp3`,
  CALL_TIMER: `${SB_URL}/sounds/friend-clock.mp3`
};
