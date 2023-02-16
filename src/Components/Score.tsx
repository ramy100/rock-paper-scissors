type Props = { score: number };

const Score: React.FunctionComponent<React.PropsWithChildren<Props>> = ({
  score,
}) => {
  return (
    <div className="outline outline-2 outline-header p-5 w-full lg:w-2/4 rounded-md flex justify-between items-center gap-5">
      <img
        className="w-20 sm:w-fit"
        src="/images/logo-bonus.svg"
        alt="rock paper scissors"
      />
      <div className="py-2 sm:px-10 sm:h-28 sm:w-28 h-20 w-20 rounded-md  bg-white flex flex-col justify-center items-center ">
        <h1 className="text-score text-sm tracking-widest">SCORE</h1>
        <span className="text-header lg:text-6xl text-4xl">{score}</span>
      </div>
    </div>
  );
};

export default Score;
