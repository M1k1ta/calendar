import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://date.nager.at/api/v3/',
});
