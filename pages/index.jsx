import React from 'react';
import App from '../components/app';

// Import thirdweb provider and Rinkeby ChainId
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

// Wrap your app with the thirdweb provider
export default function Home() {
    return (< React.StrictMode >
        <ThirdwebProvider desiredChainId={activeChainId} >
            <App />
        </ThirdwebProvider>
    </React.StrictMode>);
}