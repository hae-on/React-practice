import { useState } from 'react';

interface TabsProps {
  tabs: { label: string; content: JSX.Element }[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        {tabs.map((tab, index) => (
          <li>
            <button key={index} onClick={() => handleTab(index)}>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </>
  );
};

export default Tabs;
