import axios from 'axios';

export const setApiTokenHeader = API_TOKEN => {
  axios.defaults.headers.common['X-Token'] = API_TOKEN
}