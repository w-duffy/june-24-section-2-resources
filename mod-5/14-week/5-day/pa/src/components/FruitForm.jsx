import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function FruitForm({ fruits }) {
    const literallyAnythingWhichIsActuallyNavigate = useNavigate();
    const [name, setName] = useState('');
    const [color, setColor] = useState(COLORS[1]);
    // const [color, setColor] = useState('orange');
    const [sweetness, setSweetness] = useState(1);
    const [seeds, setSeeds] = useState('yes');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const newErrors = {};

        if (name.length < 3) {
            newErrors.name = 'Name must be 3 or more characters';
        }

        if (name.length > 20) {
            newErrors.name = 'Name must be 20 characters or less';
        }

        if (fruits.some((el) => el.name.toLowerCase() === name.toLowerCase())) {
            newErrors.name = 'Name already exists';
        }

        if (sweetness < 1 || sweetness > 10) {
            newErrors.sweetness = 'Sweetness must be between 1 and 10';
        }

        setErrors(newErrors);
    }, [name, sweetness, fruits]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            name,
            sweetness,
            color,
            seeds,
        });

        literallyAnythingWhichIsActuallyNavigate('/');
    };

    return (
        <form className="fruit-form" onSubmit={handleSubmit}>
            <h2>Enter a Fruit</h2>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={({ target: { value } }) => setName(value)}
                />
            </label>
            {errors.name && <p className="errors">{errors.name}</p>}
            <label>
                Select a Color
                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    {COLORS.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Sweetness
                <input
                    type="number"
                    name="sweetness"
                    value={sweetness}
                    onChange={(e) => setSweetness(e.target.value)}
                />
            </label>
            {errors.sweetness && <p className="errors">{errors.sweetness}</p>}
            <label>
                <input
                    type="radio"
                    value="no"
                    name="seeds"
                    checked={'no' === seeds}
                    onChange={(e) => setSeeds(e.target.value)}
                />
                No Seeds
            </label>
            <label>
                <input
                    type="radio"
                    value="yes"
                    name="seeds"
                    checked={'yes' === seeds}
                    onChange={(e) => setSeeds(e.target.value)}
                />
                Seeds
            </label>
            {/* <label>
                <input
                    type="radio"
                    value="maybe"
                    name="seeds"
                    checked={seeds}
                    // checked={'yes' === seeds}
                    onChange={(e) => setSeeds(e.target.value)}
                />
                Yet Another Seed Type
            </label> */}
            <button disabled={errors.name || errors.sweetness} type="submit">
                Submit Fruit
            </button>
        </form>
    );
}

export default FruitForm;
