const initialState = {
  data: []
};

function hivesReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_HIVES":
      return {
        ...state,
        data: action.data
      };

    case "CREATE_HIVE":
      var hives =  cloneObject(state.data)
      hives.unshift(action.data);
      state = Object.assign({}, state, { data: hives});
      return state;

    case "UPDATE_HIVE":
      var hives =  action.data;
      state = Object.assign({}, state, { data: hives});
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

export default hivesReducer;
