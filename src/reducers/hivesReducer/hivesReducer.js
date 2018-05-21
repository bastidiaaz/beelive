const initialState = {
  data: []
};

function hivesReducer(state = initialState, action) {
  switch(action.type) {
    case "FETCH_HIVES":
      return {
        ...state,
        data: action.data
      };
    default:
      return {
        ...state
      };
  }
}

export default hivesReducer;
