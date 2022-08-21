import React from 'react';
import ImgMediaCard from '../components/imageMediaCard';

export default function Listing() {

    return (
        <React.StrictMode >
            <ImgMediaCard alt='ImageCard'
                img='https://img.seadn.io/files/87419574bbad4ffcb03eefcf2433eaef.png?fit=max&w=600'
                title='ImageCard'
                caption='Test'
                description='Test' />
        </React.StrictMode>
    );
}