const DEFAULT_STATE = {
  EDITOR_SIDEBAR: null,
  ALERT: []
};

export default (state = DEFAULT_STATE, action) => {
  return {...state, [action.type]: action.payload};
}
