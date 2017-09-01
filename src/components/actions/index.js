const LOAD_WORDS = 'LOAD_WORDS';
const LOAD_SETTINGS = 'LOAD_SETTINGS';

export function loadWords() {
  return {
    type: LOAD_WORDS
  }
}

export function loadSettings() {
  return {
    type: LOAD_SETTINGS
  }
}
