const DEFAULT_STATE = {

};

export default (state = DEFAULT_STATE, action) => {
  return {...state, [action.type]: action.payload};
}
