type choices = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
type Props = { choice: choices };

const GameChoice: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  choice,
}) => {
  return (
    <div
      className={`p-[3%] w-[30%] aspect-square z-10 duration-75 cursor-pointer active:scale-90 
      select-none rounded-full bg-gradient-to-r from-${choice}-0 to-${choice}-1`}>
      <div
        className={`rounded-full bg-white w-full h-full flex items-center justify-center bg-${choice}-image 
        bg-[length:50%_50%] bg-no-repeat bg-center`}></div>
    </div>
  );
};

export default GameChoice;
