import fruits from "./mockData/fruits.json";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import FruitsIndex from "./components/FruitsIndex";
import FruitShow from "./components/FruitShow";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit";
import Navigation from "./components/Navigation";

const Layout = () => {
  return (
    <main>
      <h1>Welcome to Fruits App</h1>
      <Navigation />
      <Outlet />
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FruitsIndex fruits={fruits} />,
      },
      {
        path: "fruits/:fruitId",
        element: <FruitShow fruits={fruits} />,
      },
      {
        path: "fruits/new",
        element: <FruitForm fruits={fruits} />,
      },
      {
        path: "fav-fruit",
        element: <FavoriteFruit fruits={fruits} />,
      },
      {
        path: "set-fav-fruit",
        element: <SetFavoriteFruit fruits={fruits} />,
      },
      {
        path: "*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
