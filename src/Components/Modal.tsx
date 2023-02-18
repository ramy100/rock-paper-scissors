import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Button from './Button';

type Props = { isOpen: boolean; onClose: () => void; title: string };

const Modal: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  children,
  isOpen,
  onClose,
  title,
}) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={() => {
            onClose();
          }}
          className={
            ' cursor-pointer p-10 fixed hover:cursor-pointer text-white top-0 bottom-0 left-0 right-0 mt-auto justify-center items-center flex flex-col gap-10 bg-black/70 z-50'
          }>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-10 rounded-2xl select-none cursor-default">
            <div className="flex w-full justify-between mb-5">
              <h1 className="uppercase text-black text-2xl">{title}</h1>
              <img
                onClick={() => {
                  onClose();
                }}
                className="w-8 cursor-pointer"
                src="/images/icon-close.svg"
                alt=""
              />
            </div>
            {children}
          </motion.div>
          <Button title="OK" outline />
        </div>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
