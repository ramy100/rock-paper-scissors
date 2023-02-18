import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

export type choices = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
type Props = { choice?: choices };
const GameChoice: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  choice,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isResult = location.pathname.match('result');
  return (
    <motion.div layoutId={choice} className="z-10 relative">
      <div
        onClick={() => {
          !isResult && navigate('result/' + choice);
        }}
        className={
          ` sm:p-4 p-3 aspect-square duration-300 cursor-pointer active:scale-90 
          select-none rounded-full` +
          (choice
            ? ` bg-gradient-to-r from-${choice}-0 to-${choice}-1`
            : ' bg-transparent') +
          (isResult ? ' md:w-48 w-36' : ' sm:w-36 w-28')
        }>
        <div
          className={
            `rounded-full bg-white w-full h-full flex items-center justify-center` +
            (choice
              ? ` bg-${choice}-image bg-[length:50%_50%] bg-no-repeat bg-center`
              : ' bg-black/50')
          }></div>
      </div>
    </motion.div>
  );
};

export default GameChoice;
