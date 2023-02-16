import GameChoice, { choices } from './GameChoice';

type Props = { onChoose: (c: choices) => void };

const Choices: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  onChoose,
}) => {
  return (
    <>
      <img
        src="/images/bg-pentagon.svg"
        className="absolute h-[80%] bottom-[7%] left-0 right-0 m-auto"
      />
      <GameChoice onClick={(c) => onChoose(c)} choice="scissors" />
      <div className="flex w-full justify-between">
        <GameChoice onClick={(c) => onChoose(c)} choice="spock" />
        <GameChoice onClick={(c) => onChoose(c)} choice="paper" />
      </div>
      <div className="flex w-full justify-around">
        <GameChoice onClick={(c) => onChoose(c)} choice="lizard" />
        <GameChoice onClick={(c) => onChoose(c)} choice="rock" />
      </div>
    </>
  );
};

export default Choices;
