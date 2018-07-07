import {
  GET_HIVES,
  CREATE_HIVE,
  UPDATE_HIVE,
  DELETE_HIVE
} from '../types';

import _ from 'lodash';
import { AsyncStorage, ToastAndroid } from "react-native";

export const getHives = () => async (dispatch) => {
  dispatch({
    type: GET_HIVES,
    data: 'asd'
  });
  try {
    await AsyncStorage.getItem('hives', async (err, hives) => {
      if (hives !== null) {
        hives = JSON.parse(hives)
      } else {
        hives = [];
        await AsyncStorage.setItem('hives', JSON.stringify(hives));
      }

      dispatch({
        type: GET_HIVES,
        data: hives
      })
    });
  } catch (e) {
    console.log('Error fetching');
  }
};

export const createHive = (newHive, success) => async (dispatch) => {
  // AsyncStorage.clear();
  try {
    await AsyncStorage.getItem('hives', (err, hives) => {
      hives = JSON.parse(hives);
      var apiaryHives = _.filter(hives, ['apiary', newHive.apiary]);

      var isDuplicated = !_.isUndefined(_.find(apiaryHives, ['name', newHive.name]));
      if (!isDuplicated) {
        hives.unshift(newHive);
        try {
          AsyncStorage.setItem('hives', JSON.stringify(hives), () => {
            dispatch({
              type: CREATE_HIVE,
              data: newHive
            });
          }).then(success);
        } catch (e) {
          console.log('Error setting a new item');
        }
      } else {
        ToastAndroid.show('Ya existe una colmena con este nombre en este apiario', ToastAndroid.SHORT);
        console.log('Duplicated Apiary');
      }
    });
  } catch (e) {
    console.log('Error setting a new item');
  }
};
