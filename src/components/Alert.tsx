import React from 'react';

interface AlertProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className='Alert' onClick={onClose}>
      <div>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Alert;