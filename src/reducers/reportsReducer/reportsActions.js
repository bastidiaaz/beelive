import {
  GET_REPORTS,
  CREATE_REPORT,
  UPDATE_REPORT,
  DELETE_REPORT
} from '../types';

import _ from 'lodash';
import { AsyncStorage, ToastAndroid } from "react-native";

export const getReports = (hive) => async (dispatch) => {
  try {
    await AsyncStorage.getItem('reports', async (err, reports) => {
      if (reports !== null) {
        reports = JSON.parse(reports);
        var hiveReports = _.filter(reports, ['apiary', hive.apiary], ['hive', hive.name]);
      } else {
        reports = [];
        await AsyncStorage.setItem('reports', JSON.stringify(reports));
      }
      dispatch({
        type: GET_REPORTS,
        data: hiveReports
      });
    });
  } catch (e) {
    console.log('Error fetching');
  }
};

// export const createHive = (key, newHive, success) => async (dispatch) => {
//   // AsyncStorage.clear();
//   try {
//     await AsyncStorage.getItem('hives', (err, hives) => {
//       hives = JSON.parse(hives);
//       var apiaryReports = _.filter(hives, ['apiary', key]);
//
//       var isDuplicated = !_.isUndefined(_.find(apiaryReports, ['name', newHive.name]));
//       if (!isDuplicated) {
//         hives.unshift(newHive);
//         try {
//           AsyncStorage.setItem('hives', JSON.stringify(hives), () => {
//             dispatch({
//               type: CREATE_REPORT,
//               data: newHive
//             });
//           }).then(success);
//         } catch (e) {
//           console.log('Error setting a new item');
//         }
//       } else {
//         ToastAndroid.show('Ya existe una colmena con este nombre en este apiario', ToastAndroid.SHORT);
//         console.log('Duplicated Apiary');
//       }
//     });
//   } catch (e) {
//     console.log('Error setting a new item');
//   }
// };
