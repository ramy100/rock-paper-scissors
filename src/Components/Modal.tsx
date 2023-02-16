import { createPortal } from 'react-dom';
import Button from './Button';

type Props = { isOpen: boolean; onClose: () => void };

const Modal: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  children,
  isOpen,
  onClose,
}) => {
  return createPortal(
    <div
      onClick={() => {
        onClose();
      }}
      className={
        (!isOpen && 'hidden ') +
        'cursor-pointer p-10 fixed hover:cursor-pointer text-white top-0 bottom-0 left-0 right-0 mt-auto justify-center items-center flex flex-col gap-10 bg-black/70 z-50'
      }>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-10 rounded-2xl select-none cursor-default">
        {children}
      </div>
      <Button title="OK" outline />
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
