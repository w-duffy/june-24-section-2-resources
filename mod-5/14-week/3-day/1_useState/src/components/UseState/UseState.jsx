import './UseState.css';
import { useState } from 'react';

const UseState = () => {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    return (
        <div className={`state ${theme}`}>
            <h1>UseState Component</h1>
            <button
                onClick={() =>
                    setTheme((prevTheme) =>
                        prevTheme === 'light' ? 'dark' : 'light'
                    )
                }
            >
                Toggle Theme
            </button>

            {/* <button
                onClick={() => {
                    if (theme === 'light') setTheme('dark');
                    else setTheme('light');
                }}
            >
                Toggle
            </button> */}
            <button onClick={() => setTheme('dark')}>Dark</button>
            <button onClick={() => setTheme('light')}>Light</button>
            <h2>{count}</h2>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default UseState;