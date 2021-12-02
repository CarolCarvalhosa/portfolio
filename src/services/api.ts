import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/CarolCarvalhosa/',
});

export default api;
