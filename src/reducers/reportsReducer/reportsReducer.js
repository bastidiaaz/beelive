const initialState = {
  data: []
};

function reportsReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_REPORTS":
      return {
        ...state,
        data: action.data
      };

    case "UPDATE_REPORT":
      return {
        ...state,
        data: action.data
      };

    default:
      return {
        ...state
      }
  }
}

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

export default reportsReducer;
