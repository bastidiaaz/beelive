import {
  GET_APIARIES,
  CREATE_APIARY,
  UPDATE_APIARY,
  DELETE_APIARY
} from '../types';
import _ from 'lodash';
import { AsyncStorage, ToastAndroid } from "react-native";

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

export const createApiary = (newApiary, success) => async (dispatch) => {
  // AsyncStorage.clear();
  try {
    await AsyncStorage.getItem('apiaries', (err, apiaries) => {
      apiaries = JSON.parse(apiaries);

      var isDuplicated = !_.isUndefined(_.find(apiaries, ['name', newApiary.name]));
      if (!isDuplicated) {
        try {
          apiaries.unshift(newApiary);
          AsyncStorage.setItem('apiaries', JSON.stringify(apiaries), () => {
            dispatch({
              type: CREATE_APIARY,
              data: newApiary
            });
          }).then(success);
        } catch (e) {
          console.log('Error setting a new item');
        }
      } else {
        ToastAndroid.show('Nombre de apiario en uso', ToastAndroid.SHORT);
        console.log('Duplicated Apiary');
      }
    });
  } catch (e) {
    console.log('Error setting a new item');
  }
};
