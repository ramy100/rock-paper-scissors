import React, { useState } from 'react';
import Button from './Button';
import Footer from './Footer';
import Game from './Game';
import Modal from './Modal';
import Score from './Score';

type Props = {};

const Layout: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-full flex flex-col items-center p-5 md:p-20 gap-10 overflow-x-hidden">
      <Score />
      <div className="flex-1 w-full flex justify-center items-center">
        <Game />
      </div>
      <div className="md:self-end">
        <Button
          onClick={() => {
            setShowModal(true);
            console.log('object');
          }}
          title="Rules"
          outline
        />
      </div>
      <Footer />
      <Modal
        title="rules"
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}>
        <img
          className="w-[60vh] "
          src="/images/image-rules-bonus.svg"
          alt="rules"
        />
      </Modal>
    </div>
  );
};

export default Layout;
