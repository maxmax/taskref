const initialState = {
  settings: {},
};

export default function inbox(state = initialState, action) {
  switch (action.type) {
    case 'SETTINGS_RECEIVED':
      //console.log(JSON.stringify(action.inbox));
      return {...state, settings: action.settings};
    case 'LOAD_SETTINGS_FAILURE':
      return state;
    default:
      return state
  }
}
