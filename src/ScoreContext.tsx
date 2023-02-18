import { createContext, useState } from 'react';

type Props = {};
export const ScoreContext = createContext<{
  data: number;
  setData?: React.Dispatch<React.SetStateAction<number>>;
}>({ data: 0 });

const ScoreContextProvider: React.FunctionComponent<
  React.PropsWithChildren<Props>
> = ({ children }) => {
  const [data, setData] = useState(0);

  return (
    <ScoreContext.Provider value={{ data, setData }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
