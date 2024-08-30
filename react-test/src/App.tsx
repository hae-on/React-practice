import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Modal Content</h1>
        <p>This is the content inside the modal</p>
      </Modal>
    </>
  );
}

export default App;
