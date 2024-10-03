import horoscopesObj from '../data/horoscopes';
import { useHoroscopeContext } from '../context/HoroscopeContext';

const Navbar = () => {
    const { setCurrentSign } = useHoroscopeContext();
    const horoscopes = Object.keys(horoscopesObj);

    return (
        <nav>
            {horoscopes.map((sign) => (
                <span key={sign} onClick={() => setCurrentSign(sign)}>
                    {sign}
                </span>
            ))}
        </nav>
    );
};

export default Navbar;
