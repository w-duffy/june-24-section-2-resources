const NavLinks = ({ pets, owners }) => {
    // const { pets, owners } = props;

    return (
        <ul>
            <li className="selected">
                <a href="/pets">{pets}</a>
            </li>
            <li>
                <a href="/owners">{owners}</a>
            </li>
        </ul>
    );
};

const NavBar = () => {
    const pets = 'Pets';
    const theOwnersText = 'OWNERS!!!';
    return (
        <nav>
            <h1>Pet App</h1>
            <NavLinks pets={pets} owners={theOwnersText} />
        </nav>
    );
};

// const NavBar = () => {
//     const pets = 'Pets';
//     const owners = 'OWNERS!!!';

//     return (
//         <nav>
//             <h1>Pet App</h1>
//             <ul>
//                 <li className="selected">
//                     <a href="/pets">{pets}</a>
//                 </li>
//                 <li>
//                     <a href="/owners">{owners}</a>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

export default NavBar;
