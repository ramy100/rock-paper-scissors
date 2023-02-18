import GameChoice from './GameChoice';

type Props = {};

const Choices: React.FunctionComponent<
  React.PropsWithChildren<Props>
> = ({}) => {
  return (
    <div className="h-full w-full flex max-w-lg flex-col gap-10  items-center relative">
      <img
        src="/images/bg-pentagon.svg"
        className="absolute h-[80%] w-full bottom-[5%] left-0 right-0 m-auto"
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

export default Choices;
