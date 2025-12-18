let currentBGM: HTMLAudioElement | null = null;
let currentSFX: HTMLAudioElement | null = null;
let isMutedGlobal = false;

export const setGlobalMute = (muted: boolean) => {
  isMutedGlobal = muted;
  if (currentBGM) currentBGM.muted = muted;
  if (currentSFX) currentSFX.muted = muted;
};

export const playBGM = (url?: string, loop: boolean = false) => {
  if (!url) return;
  stopBGM();
  const audio = new Audio(url);
  audio.volume = 0.4;
  audio.loop = loop;
  audio.muted = isMutedGlobal;
  currentBGM = audio;
  audio.play().catch(() => {});
  return audio;
};

export const playSFX = (url?: string) => {
  if (!url) return;
  stopSFX();
  const audio = new Audio(url);
  audio.volume = 0.6;
  audio.muted = isMutedGlobal;
  currentSFX = audio;
  audio.play().catch(() => {});
  return audio;
};

export const stopBGM = () => {
  if (currentBGM) {
    currentBGM.pause();
    currentBGM.currentTime = 0;
    currentBGM = null;
  }
};

export const stopSFX = () => {
  if (currentSFX) {
    currentSFX.pause();
    currentSFX.currentTime = 0;
    currentSFX = null;
  }
};

export const stopAll = () => {
  stopBGM();
  stopSFX();
};
