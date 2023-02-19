import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WinAnimation from '../../public/images/win.json';
import { ScoreContext } from '../ScoreContext';
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
  const { setData } = useContext(ScoreContext);

  const [computerPick, setComputerPick] = useState<choices>();
  const [winner, setWinner] = useState<'player' | 'computer'>();
  const [countDown, setCountDown] = useState(3);
  useEffect(() => {
    let interval: number;
    interval = setInterval(() => {
      setCountDown((old) => {
        if (old == 1) {
          clearInterval(interval);
          setComputerPick(
            availableChoices[
              Math.floor(Math.random() * availableChoices.length)
            ]
          );
          return old;
        }
        return old - 1;
      });
    }, 500);
  }, []);

  useEffect(() => {
    if (computerPick) {
      setWinner(rules[choice][computerPick] ? 'player' : 'computer');
    }
  }, [computerPick]);

  useEffect(() => {
    if (!setData || !computerPick) return;
    const newScore = winner == 'player' ? +1 : -1;
    setData((old) => old + newScore);
  }, [winner]);

  const navigate = useNavigate();
  if (!choice) return null;
  return (
    <div className="w-full max-w-4xl uppercase grid grid-cols-2 md:grid-cols-6  justify-items-center gap-5">
      <span
        className={
          'md:col-span-2 text-xl text-center' +
          (!winner ? ' md:col-span-3' : '')
        }>
        You Picked {choice}
      </span>
      <span
        className={
          'md:col-span-2 text-xl text-center' +
          (!winner ? ' md:col-span-3' : ' md:col-start-5')
        }>
        The house Picked {computerPick}
      </span>
      <div
        className={
          'relative md:col-span-2' + (!winner ? ' md:col-span-3' : '')
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
          'relative md:col-span-2 md:order-last' +
          (!winner ? ' md:col-span-3' : '')
        }>
        {winner == 'computer' && (
          <>
            <div className="absolute animate-ping w-full h-full rounded-full bg-dark bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
            <div className="absolute animate-ping w-[85%] h-[85%] rounded-full bg-white/30 bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
            <div className="absolute animate-ping w-[70%] h-[70%] rounded-full bg-white/20 bottom-0 top-0 left-0 right-0 m-auto z-0"></div>
          </>
        )}
        {computerPick ? (
          <GameChoice choice={computerPick} />
        ) : (
          <div className="bg-dark h-full md:w-48 w-36 rounded-full text-center flex justify-center items-center">
            <span className="text-6xl">{countDown}</span>
          </div>
        )}
      </div>
      {winner && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="flex flex-col gap-5 items-center relative  col-span-2">
          {winner == 'player' && (
            <Lottie
              className="absolute w-full z-0 -top-20"
              animationData={WinAnimation}
              loop={true}
              autoplay={true}
            />
          )}
          <h1 className="text-6xl font-bold text-center">
            You {computerPick && (winner == 'player' ? 'Won' : 'lost')}
          </h1>
          <Button
            onClick={() => navigate('/')}
            title="Play again"
            className="bg-white text-black uppercase tracking-widest z-10"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Result;
