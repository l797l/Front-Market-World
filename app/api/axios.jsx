import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiiraqmarket.runasp.net/api/marketiraqi/'
});

export default api;