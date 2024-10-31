const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const fetchPlanets = async (page: number = 1, search?: string) => {
  const searchParams = new URLSearchParams({
    page: page.toString(),
    ...(search && { search }),
  });
  
  const response = await fetch(
    `${SWAPI_BASE_URL}/planets/?${searchParams.toString()}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch planets');
  }
  
  return response.json();
};

export const fetchPlanetById = async (id: string) => {
  const response = await fetch(`${SWAPI_BASE_URL}/planets/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch planet details');
  }
  
  return response.json();
};