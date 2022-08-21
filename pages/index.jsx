import React from 'react';
import ImgMediaCard from '../components/imageMediaCard';


// Wrap your app with the thirdweb provider
export default function Home() {

    return (< React.StrictMode >
  
            <ImgMediaCard alt='ImageCard'
                img='https://img.seadn.io/files/87419574bbad4ffcb03eefcf2433eaef.png?fit=max&w=600'
                title='ImageCard'
                caption='Test'
                description='Test' />
                
    </React.StrictMode>);
}