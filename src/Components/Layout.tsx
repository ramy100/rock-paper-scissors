import React from 'react';
import Button from './Button';
import Footer from './Footer';
import Game from './Game';
import Score from './Score';

type Props = {};

const Layout: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div className="h-full flex flex-col items-center p-20 gap-5">
      <Score />
      <div className="flex-1 w-full flex justify-center items-center">
        <Game />
      </div>
      <div className="self-end">
        <Button title="Rules" outline />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
