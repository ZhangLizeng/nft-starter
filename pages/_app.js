import "../styles/globals.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
    return ( < Component {...pageProps }
        /> 
    );
}

export default MyApp;