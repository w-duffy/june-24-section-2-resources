import { NavLink } from 'react-router-dom';

function MovieNavBar({ movies }) {
  console.log("in movie nav bar", movies)
  return (
    <nav>
      {movies.map((movie) => (
        <span key={movie.id}>
          <>
          {/* {console.log("Movie", movie)} */}
          <NavLink to={`${movie.id}`}>{movie.title}</NavLink>|
          </>
        </span>
      ))}
    </nav>
  );
}

export default MovieNavBar;
