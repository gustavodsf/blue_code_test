import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.giphy.com/v1/',
});

export { api };