import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Stocks from './components/Stocks';
import Home from './components/Home';
import Movies from './components/Movies';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'spots',
    element: <Stocks />,
    children: [
      {
        path: "movie",
        element: <Movies />
      }
    ]
  },
  {
    path: 'movies',
    element: <Movies />
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>
  }
]);



function App() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
