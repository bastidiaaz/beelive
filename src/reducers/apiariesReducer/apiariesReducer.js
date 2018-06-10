const initialState = {
  data: []
};

function apiariesReducer(state = initialState, action) {
  switch(action.type) {
    case "FETCH_APIARIES":
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

export default apiariesReducer;
