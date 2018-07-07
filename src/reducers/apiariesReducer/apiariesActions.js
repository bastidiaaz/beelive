import {
  GET_APIARIES,
  CREATE_APIARY,
  UPDATE_APIARY,
  DELETE_APIARY
} from '../types';
import { AsyncStorage } from "react-native";

export const getApiaries = () => async (dispatch) => {
  try {
    await AsyncStorage.getItem('apiaries', async (err, apiaries) => {
      if (apiaries !== null) {
        apiaries = JSON.parse(apiaries)
      } else {
        apiaries = [];
        await AsyncStorage.setItem('apiaries', JSON.stringify(apiaries));
      }

      dispatch({
        type: GET_APIARIES,
        data: apiaries
      })
    });
  } catch (e) {
    console.log('Error fetching');
  }
};

export const createApiary = (newApiary) => async (dispatch) => {
  // AsyncStorage.clear();
  try {
    await AsyncStorage.getItem('apiaries', (err, apiaries) => {
      apiaries = JSON.parse(apiaries);
      apiaries.unshift(newApiary);
      try {
        AsyncStorage.setItem('apiaries', JSON.stringify(apiaries), () => {
          dispatch({
            type: CREATE_APIARY,
            data: newApiary
          });
        });
      } catch (e) {
        console.log('Error setting a new item');
      }
    });
  } catch (e) {
    console.log('Error setting a new item');
  }
};
