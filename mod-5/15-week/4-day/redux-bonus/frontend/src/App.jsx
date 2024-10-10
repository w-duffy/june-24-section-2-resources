import { createBrowserRouter, RouterProvider, Navigate, Outlet, Link, useLoaderData } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import SingleArticle from './components/SingleArticle';
import ArticleInput from './components/ArticleInput';
import './App.css';

function ArticleLayout() {
  let articles = useLoaderData()
  
  return (
    <>
      <ArticleList articles={articles} />
      <Outlet />
      <Link to='/articles/new'>Create a new Article </Link>
    </>
  )
}

async function loadAllArticles() {
return fetch("/api/articles")
}

const router = createBrowserRouter([
  {
    path: 'articles',
    element: <ArticleLayout />,
    loader: loadAllArticles,
    children: [
      {
        path: ':id',
        element: <SingleArticle />
      }
    ]
  },
  {
    path: 'articles/new',
    element: <ArticleInput />
  },

  
  {
    path: '*',
    element: <Navigate to='/articles' replace={true} />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
