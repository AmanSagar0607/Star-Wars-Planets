const BASE_URL = 'https://swapi.dev/api';

export const getPlanets = async (page) => {
  // Construct the URL with the provided page number
  const url = `${BASE_URL}/planets/?page=${page}&format=json`;

  // Fetch data from the API using the constructed URL
  const response = await fetch(url);

  // Convert the response to JSON format
  const data = await response.json();

  // Return the fetched data
  return data;
};
