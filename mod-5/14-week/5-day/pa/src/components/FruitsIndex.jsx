import { Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  return (
    <div className="fruits-index">
      <h2>Fruits Index</h2>
      <ul>
        {fruits.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`fruits/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FruitsIndex;
