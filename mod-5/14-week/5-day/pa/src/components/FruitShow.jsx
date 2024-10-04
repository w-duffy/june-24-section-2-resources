import { useParams } from 'react-router-dom';

function FruitShow({ fruits }) {
    const { fruitId } = useParams();

    const { name, color, sweetness, seeds } = fruits.find(
        ({ id }) => id === fruitId
    );

    return (
        <div className="fruit-show">
            <h2>{name}</h2>
            <p>Color: {color}</p>
            <p>Sweetness: {sweetness}</p>
            <p>Seeds: {seeds}</p>
        </div>
    );
}

export default FruitShow;
