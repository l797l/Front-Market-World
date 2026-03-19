import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://apiiraqmarket.runasp.net/api/marketiraqi/'
});

export const apiWorld = axios.create({
  baseURL: 'https://api.coinbase.com/v2/prices/'
});

