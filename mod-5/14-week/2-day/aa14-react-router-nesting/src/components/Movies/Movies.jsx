import { Outlet, useLoaderData } from "react-router-dom";
import MovieNavBar from "./MovieNavBar";

function Movies({ another }) {
  
let data = useLoaderData()

  // console.log("Here's that other prop: ", hello);

  return (
    <div className="comp orange">
      <h1>{another.object}</h1>
      <MovieNavBar movies={data} />
      <Outlet />
    </div>
  );
}

export default Movies;
