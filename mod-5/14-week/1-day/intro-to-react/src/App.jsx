import './App.css';
import Dev from './Dev';
import NavBar from './NavBar';

function App() {
    return (
        <>
            <NavBar />
            <h1>Hello!</h1>

            {/* <button
                onClick={() =>
                    fetch(
                        'https://airbnb-project-wuso.onrender.com/hello/world'
                    )
                        .then((res) => res.json())
                        .then((res) => console.log(res))
                }
            >
             */}
            {/* <button onClick={() => console.log('My secret is here!')}>
                {'Print a secret :)'}
            </button> */}
            <button onClick={() => console.log('My secret is in the console!')}>
                {'Print a secret :)'}
            </button>
            <Dev />
        </>
    );
}

export default App;
