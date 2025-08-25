type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div>
      <h1>Olá mundo</h1>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default Modal;
