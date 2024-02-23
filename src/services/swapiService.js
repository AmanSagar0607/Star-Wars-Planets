const BASE_URL = 'https://swapi.dev/api';

export const getPlanets = async (page) => {
  const response = await fetch(`${BASE_URL}/planets/?page=${page}&format=json`);
  const data = await response.json();
  return data;
};
