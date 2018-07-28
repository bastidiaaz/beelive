const initialState = {
  data: []
};

function apiariesReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_APIARIES":
      return {
        ...state,
        data: action.data
      };

    case "CREATE_APIARY":
      var apiaries =  cloneObject(state.data);
      apiaries.unshift(action.data);
      state = Object.assign({}, state, { data: apiaries});
      return state;

    case "UPDATE_APIARY":
      var apiaries =  action.data;
      state = Object.assign({}, state, { data: apiaries});
      return state;

    case "DELETE_APIARY":
      var apiaries =  action.data;
      state = Object.assign({}, state, { data: apiaries});
      return state;

    default:
      return {
        ...state
      };
  }
}

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

export default apiariesReducer;
