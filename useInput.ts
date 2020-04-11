import { useState, useCallback } from 'react';

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (event: any) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return { value, handleChange, setValue };
};

export default useInput;
