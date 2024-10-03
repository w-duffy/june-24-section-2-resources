// import speedy from '../../pups/speedy-pup.jpg';
// import banana from '../../pups/banana-pup.jpg';
// import sleepy from '../../pups/sleepy-pup.jpg';

import { useContext } from 'react';
import { PupContext } from '../../context/PupContext';

const PupImage = () => {
    const { puppyType } = useContext(PupContext);

    console.log("In Pup Image Component: ", puppyType);

    return (
        <>
            <img src={puppyType} alt="pup" />
        </>
    );
};

export default PupImage;
