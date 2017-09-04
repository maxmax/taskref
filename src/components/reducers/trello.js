const initialState = {
  lanes: [],
};

export default function trello(state = initialState, action) {
  switch (action.type) {
    case 'LANES_RECEIVED':
      return {...state, lanes: action.trello};
    case 'LOAD_LANES_FAILURE':
      return state;
    default:
      return state
  }
}
