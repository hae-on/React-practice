import { useState } from 'react';

export const useToggle = (on: boolean): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(on);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return [toggle, handleToggle];
};
