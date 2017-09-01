const initialState = {
  words: [],
};

export default function words(state = initialState, action) {
  switch (action.type) {
    case 'WORDS_RECEIVED':
      return {...state, words: action.words};
    case 'LOAD_WORDS_FAILURE':
      return state;
    default:
      return state
  }
}
