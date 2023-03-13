export const CARS_ENDPOINT = 'https://carsapp2050.fly.dev/api/v1/cars/';

export const fetchCars = async () => {
  const resp = await fetch(CARS_ENDPOINT);
  // const resp = await fetch(CARS_ENDPOINT.slice(0, -3));
  console.log(resp);
  if (!resp.ok) throw new Error('Failed to fetch');
  return await resp.json();
};

export const addCar = async (data) => {
  const resp = await fetch(CARS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!resp.ok) throw new Error(await resp.json());
  return resp.json();
};
