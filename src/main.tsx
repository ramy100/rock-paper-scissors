import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Choices from './Components/Choices';
import Game from './Components/Game';
import Result from './Components/Result';
import './index.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Game />,
        children: [
          {
            path: '',
            element: <Choices />,
          },
          { path: 'result/:choice', element: <Result /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
