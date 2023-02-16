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
  const [score, setScore] = useState(0);
  return (
    <div className="h-full flex flex-col items-center p-5 md:p-20 gap-10 ">
      <Score score={score} />
      <div className="flex-1 w-full flex justify-center items-center">
        <Game />
      </div>
      <div className="self-end">
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
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}>
        <img width={700} src="/images/image-rules-bonus.svg" alt="rules" />
      </Modal>
    </div>
  );
};

export default Layout;
