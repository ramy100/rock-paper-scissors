import React from 'react';
import Button from './Button';
import Footer from './Footer';
import Score from './Score';

type Props = {};

const Layout: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div className="h-full flex flex-col items-center p-20 gap-5">
      <Score />
      <div className="flex-1">body</div>
      <div className="self-end">
        <Button title="Rules" outline />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
