import { Outlet } from 'react-router-dom';

type Props = {};

const Game: React.FunctionComponent<React.PropsWithChildren<Props>> = ({}) => {
  return (
    <div className="w-full flex justify-center">
      <Outlet></Outlet>
    </div>
  );
};

export default Game;
