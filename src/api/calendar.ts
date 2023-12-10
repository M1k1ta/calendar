import { client } from '../utils/client';

export const getPublicHolidays = (year: number, countryCode: string) => {
  return client.get(`/PublicHolidays/${year}/${countryCode}`);
};

export const getAvailableCountries = () => {
  return client.get('/AvailableCountries');
};
