import Button from './Button';
import GameChoice, { choices } from './GameChoice';

type Props = { choice: choices; onPlayAgain: () => void };

const Result: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  choice,
  onPlayAgain,
}) => {
  return (
    <div className="h-full w-full border-2 flex flex-col justify-center items-center gap-10">
      <div className="flex justify-around w-full">
        <GameChoice choice={choice} />
        <GameChoice choice={choice} />
      </div>
      <div className="flex justify-around w-full">
        <span>You choose {choice}</span>
        <span>Computer choose {choice}</span>
      </div>
      <Button
        onClick={() => onPlayAgain()}
        title="Play again"
        className="bg-white text-black"
      />
    </div>
  );
};

export default Result;
