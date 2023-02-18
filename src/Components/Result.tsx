import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';
import GameChoice, { choices } from './GameChoice';

type Props = {};
const rules = {
  lizard: { spock: true, paper: true },
  paper: { rock: true, spock: true },
  rock: { scissors: true, lizard: true },
  scissors: { paper: true, lizard: true },
  spock: { scissors: true, rock: true },
} as Record<choices, Record<choices, boolean>>;
const allChoices = ['lizard', 'paper', 'lizard', 'rock', 'scissors', 'spock'];
const Result: React.FunctionComponent<
  React.PropsWithChildren<Props>
> = ({}) => {
  const { choice } = useParams<{ choice: choices }>();
  if (!choice || !allChoices.includes(choice)) return null;
  const availableChoices = allChoices.filter((c) => c != choice) as choices[];

  const [computerPick, setComputerPick] = useState<choices>();
  const [winner, setWinner] = useState<'player' | 'computer'>();
  useEffect(() => {
    setTimeout(() => {
      setComputerPick(
        availableChoices[Math.floor(Math.random() * availableChoices.length)]
      );
    }, 1000);
  }, []);
  useEffect(() => {
    if (computerPick)
      setWinner(rules[choice][computerPick] ? 'player' : 'computer');
  }, [computerPick]);

  const navigate = useNavigate();
  if (!choice) return null;
  return (
    <div className="w-full max-w-4xl relative grid grid-cols-6 justify-items-center gap-10 md:gap-20 uppercase">
      <span
        className={
          'text-center text-xl col-span-3' +
          (computerPick ? ' md:col-span-2' : '')
        }>
        You Picked {choice}
      </span>
      <span
        className={
          'text-center text-xl col-span-3' +
          (computerPick ? ' md:col-span-2 md:col-start-5' : '')
        }>
        The house Picked {computerPick}
      </span>
      <div
        className={
          'col-span-3 relative ' + (computerPick ? ' md:col-span-2' : '')
        }>
        {winner == 'player' && (
          <>
            <div className="absolute animate-ping w-full h-full rounded-full bg-dark bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
            <div className="absolute animate-ping w-[85%] h-[85%] rounded-full bg-white/30 bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
            <div className="absolute animate-ping w-[70%] h-[70%] rounded-full bg-white/20 bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
          </>
        )}
        <GameChoice choice={choice} />
      </div>
      <div
        className={
          'col-span-3 md:order-last relative' +
          (computerPick ? ' md:col-span-2' : '')
        }>
        {winner == 'computer' && (
          <>
            <div className="absolute animate-ping w-full h-full rounded-full bg-dark bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
            <div className="absolute animate-ping w-[85%] h-[85%] rounded-full bg-white/30 bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
            <div className="absolute animate-ping w-[70%] h-[70%] rounded-full bg-white/20 bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
          </>
        )}
        <GameChoice choice={computerPick} />
      </div>
      <AnimatePresence>
        {winner && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col gap-5 col-span-6 items-center md:col-span-2">
            <h1 className="text-6xl font-bold text-center">
              You {computerPick && (winner == 'player' ? 'Won' : 'lost')}
            </h1>
            <Button
              onClick={() => navigate('/')}
              title="Play again"
              className="bg-white text-black uppercase tracking-widest"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Result;
