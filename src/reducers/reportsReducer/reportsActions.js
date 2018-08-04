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
        var hiveReports = [];
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

export const createReport = (hive, newReport, success) => async (dispatch) => {
  // AsyncStorage.clear();
  try {
    await AsyncStorage.getItem('reports', (err, reports) => {
      if (reports !== null) {
        reports = JSON.parse(reports);
      } else {
        reports = [];
        AsyncStorage.setItem('reports', JSON.stringify(reports));
      }

      newReport.hive = hive.name;
      newReport.apiary = hive.apiary;
      reports.unshift(newReport);
      try {
        AsyncStorage.setItem('reports', JSON.stringify(reports)).then(() => {
          AsyncStorage.getItem('hives', async (err, hives) => {
            hives = JSON.parse(hives);
            _.find(hives, ['apiary', hive.apiary], ['name', hive.name]).totalReports++;
            AsyncStorage.setItem('hives', JSON.stringify(hives), () => {
              dispatch({
                type: CREATE_REPORT,
                data: reports
              });
            }).then(success);
          });
        });
      } catch (e) {
        console.log('Error creating a new report');
      }
    });
  } catch (e) {
    console.log('Error creating a new report');
  }
};
