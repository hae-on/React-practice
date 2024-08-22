import { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return <button onClick={handleToggleSwitch}>{isOn ? 'Off' : 'On'}</button>;
};

export default ToggleSwitch;
