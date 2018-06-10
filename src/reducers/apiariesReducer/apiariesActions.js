import { FETCH_APIARIES } from '../types';

export const fetchApiaries = () => dispatch => {
  fetch('http://192.168.1.130:3000/apiaries')
  .then(response => response.json())
  .then(apiaries =>
    dispatch({
      type: FETCH_APIARIES,
      data: apiaries
    })
  );
};
