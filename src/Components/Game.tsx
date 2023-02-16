import { useState } from 'react';
import Choices from './Choices';
import { choices } from './GameChoice';
import Result from './Result';

type Props = {};

const Game: React.FunctionComponent<React.PropsWithChildren<Props>> = ({}) => {
  const [choice, setChoice] = useState<choices>();
  return (
    <div className="w-full max-w-lg aspect-square relative flex flex-col gap-10 justify-between items-center">
      {!choice ? (
        <Choices onChoose={(c) => setChoice(c)} />
      ) : (
        <Result onPlayAgain={() => setChoice(undefined)} choice={choice} />
      )}
    </div>
  );
};

export default Game;
