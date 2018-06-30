import {
  GET_APIARIES,
  CREATE_APIARY,
  UPDATE_APIARY,
  DELETE_APIARY
} from '../types';

import { AsyncStorage } from "react-native";

export const getApiaries = () => dispatch => {
  fetch('http://192.168.1.130:3000/apiaries')
  .then(response => response.json())
  .then(apiaries =>
    dispatch({
      type: GET_APIARIES,
      data: apiaries
    })
  );
};

export const createApiary = (newApiary) => dispatch => {
  AsyncStorage.getItem('apiaries', (err, apiaries) => {
    if (apiaries !== null){
      apiaries = JSON.parse(apiaries);
      apiaries.unshift(newApiary); //add the new quote to the top
      AsyncStorage.setItem('apiaries', JSON.stringify(apiaries), () => {
        dispatch({
          type: CREATE_APIARY,
          data: newApiary
        });
      });
    } else {
      console.log(JSON.stringify([newApiary]));
      AsyncStorage.setItem('apiaries', JSON.stringify([newApiary]), () => {
        dispatch({
          type: CREATE_APIARY,
          data: newApiary
        });
      });
    }
  });
};
