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

    // case "CREATE_HIVE":
    //   var reports =  cloneObject(state.data)
    //   reports.unshift(action.data);
    //   state = Object.assign({}, state, { data: reports});
    //   return state;
  }
}

function cloneObject(object){
    return JSON.parse(JSON.stringify(object));
}

export default reportsReducer;
