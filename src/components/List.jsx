import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchCars, addCar } from '../API';

const newCar = {
  name: 'dm',
  bhp: 1,
};

function List() {
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data } = useQuery('cars', fetchCars);
  // console.log(query);
  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return <p>{error.message}</p>;
  }

  const mutation = useMutation(addCar, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('cars');
    },
  });

  return (
    <>
      <h1>List</h1>
      <button onClick={() => mutation.mutate(newCar)}>Add Car</button>
      <ul>
        {data.map(({ _id, name, bhp }) => (
          <li key={_id}>
            {name}({bhp})
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
