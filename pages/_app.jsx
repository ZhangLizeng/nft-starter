import "../styles/globals.css";
import { WalletContext, WalletProvider } from "../components/walletProvider";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Header from "../components/header";

const activeChainId = ChainId.Rinkeby;

function MyApp({ Component, pageProps }) {
    return (<ThirdwebProvider desiredChainId={activeChainId} >
        <WalletProvider >
            <Header />
            <Component {...pageProps}/>
            </WalletProvider > 
            </ThirdwebProvider >
        );
}

export default MyApp;