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
        ToastAndroid.show('Ya existe un apiario con este nombre', ToastAndroid.SHORT);
        console.log('Duplicated Apiary');
      }
    });
  } catch (e) {
    console.log('Error setting a new item');
  }
};

export const updateApiary = (apiary, success) => async (dispatch) => {
  // AsyncStorage.clear();
  try {
    await AsyncStorage.getItem('apiaries', (err, apiaries) => {
      apiaries = JSON.parse(apiaries);

      var prevApiary = _.find(apiaries, ['name', apiary.prevValues.name]);
      var isDuplicated = !_.isUndefined(_.find(apiaries, ['name', apiary.newValues.name])) && apiary.newValues.name !== apiary.prevValues.name;
      if (prevApiary && !isDuplicated) {
        try {
          _.remove(apiaries, ['name', prevApiary.name]);
          apiaries.unshift(apiary.newValues);

          AsyncStorage.getItem('hives', (err, hives) => {
            hives = JSON.parse(hives);
            hives.map((hive, index) => {
              if (hive.apiary === apiary.prevValues.name) {
                hive.apiary = apiary.newValues.name;
              }
            });
            AsyncStorage.setItem('hives', JSON.stringify(hives));
          });

          AsyncStorage.setItem('apiaries', JSON.stringify(apiaries), () => {
            dispatch({
              type: UPDATE_APIARY,
              data: apiaries
            });
          }).then(success);
        } catch (e) {
          console.log('Error setting a new item');
        }
      } else {
        ToastAndroid.show('Ya existe un apiario con este nombre', ToastAndroid.SHORT);
        console.log('Duplicated Apiary');
      }
    });
  } catch (e) {
    console.log('Error setting a new item');
  }
};

export const deleteApiary = (apiary) => (dispatch) => {
  console.log(apiary);
  console.log('asdafadsfd');
  try {
    AsyncStorage.getItem('apiaries', (err, apiaries) => {
      apiaries = JSON.parse(apiaries)
      _.remove(apiaries, ['name', apiary.name]);
      console.log(apiaries);

      AsyncStorage.setItem('apiaries', JSON.stringify(apiaries), () => {
        dispatch({
          type: DELETE_APIARY,
          data: apiaries
        });
      }).then(success);
    });
  } catch (e) {
    console.log('Error deleting');
  }
};
