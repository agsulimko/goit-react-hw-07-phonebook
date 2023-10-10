import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialData) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialData
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
