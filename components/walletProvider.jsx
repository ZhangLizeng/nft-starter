import { useAddress } from '@thirdweb-dev/react';
import { createContext} from 'react';

export const WalletContext = createContext();

export const WalletProvider = (props) => {
    const address = useAddress();
    const { children } = props;

    return (
        <WalletContext.Provider value={address}>
            {children}
        </WalletContext.Provider>
    )
}