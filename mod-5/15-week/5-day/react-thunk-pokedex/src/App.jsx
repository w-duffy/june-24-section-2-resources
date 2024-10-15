import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonBrowser from './components/PokemonBrowser';

const router = createBrowserRouter(
  ["/", "/pokemon", "/pokemon/:pokemonId"].map((path) => {
    return {
      path,
      element:  <PokemonBrowser />
    };
  })
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
