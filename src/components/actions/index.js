const LOAD_WORDS = 'LOAD_WORDS';
const LOAD_SETTINGS = 'LOAD_SETTINGS';
const LOAD_LANES = 'LOAD_LANES';

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

export function loadLines() {
  return {
    type: LOAD_LANES
  }
}

// on dev
const uid = () => Math.random().toString( 34 ).slice( 2 );

export function addTodo( text )
{
  return {
    type   : 'ADD_TODO',
    payload: {
      id    : uid(),
      isDone: false,
      text  : text
    }
  };
}

export function toggleTodo( id )
{
  return {
    type   : 'TOGGLE_TODO',
    payload: id
  }
}
