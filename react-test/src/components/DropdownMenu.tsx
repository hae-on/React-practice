import { useState } from 'react';

interface DropdownMenuProps {
  items: string[];
}

const DropdownMenu = ({ items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleDropdown}>Menu</button>
      {isOpen && (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropdownMenu;
