import { FETCH_HIVES } from '../types';

export const fetchHives = () => dispatch => {
  fetch('http://192.168.1.130:3000/hives')
  .then(response => response.json())
  .then(hives =>
    dispatch({
      type: FETCH_HIVES,
      data: hives
    })
  );
};
