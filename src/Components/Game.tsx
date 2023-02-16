import GameChoice from './GameChoice';

type Props = {};

const Game: React.FunctionComponent<React.PropsWithChildren<Props>> = ({}) => {
  return (
    <div className="w-full max-w-lg aspect-square relative flex flex-col gap-10 justify-between items-center">
      <img
        src="/images/bg-pentagon.svg"
        className="absolute h-[80%] bottom-[7%] left-0 right-0 m-auto"
      />
      <GameChoice choice="scissors" />
      <div className="flex w-full justify-between">
        <GameChoice choice="spock" />
        <GameChoice choice="paper" />
      </div>
      <div className="flex w-full justify-around">
        <GameChoice choice="lizard" />
        <GameChoice choice="rock" />
      </div>
    </div>
  );
};

export default Game;
