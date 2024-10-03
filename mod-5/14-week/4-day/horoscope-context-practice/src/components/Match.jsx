import { useState } from 'react';
import { useHoroscopeContext } from '../context/HoroscopeContext';

export default function Match() {
    const { sign } = useHoroscopeContext();
    const [match, setMatch] = useState(false);

    console.log(sign);

    return (
        <>
            <button onClick={() => setMatch(!match)}> Display Match </button>
            {match && <div>{sign.match}</div>}
        </>
    );
}
