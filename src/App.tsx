import { Outlet } from 'react-router-dom';
import Layout from './Components/Layout';
import ScoreContextProvider from './ScoreContext';

function App() {
  return (
    <ScoreContextProvider>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </ScoreContextProvider>
  );
}

export default App;
