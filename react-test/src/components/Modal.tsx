import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element[];
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content'>
        <button className='modal-close' onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
