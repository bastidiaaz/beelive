import {
  GET_HIVES,
  CREATE_HIVE,
  UPDATE_HIVE,
  DELETE_HIVE
} from '../types';

import { AsyncStorage } from "react-native";

export const getHives = () => async (dispatch) => {
  dispatch({
    type: GET_HIVES,
    data: 'asd'
  });
  // try {
  //   await AsyncStorage.getItem('hives', async (err, hives) => {
  //     if (hives !== null) {
  //       hives = JSON.parse(hives)
  //     } else {
  //       hives = [];
  //       await AsyncStorage.setItem('hives', JSON.stringify(hives));
  //     }
  //
  //     dispatch({
  //       type: GET_HIVES,
  //       data: hives
  //     })
  //   });
  // } catch (e) {
  //   console.log('Error fetching');
  // }
};

export const createHive = (newHive) => async (dispatch) => {
  // AsyncStorage.clear();
  try {
    await AsyncStorage.getItem('hives', (err, hives) => {
      hives = JSON.parse(hives);
      hives.unshift(newApiary);
      try {
        AsyncStorage.setItem('hives', JSON.stringify(hives), () => {
          dispatch({
            type: CREATE_HIVE,
            data: newHive
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
