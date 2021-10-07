import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

export const NODE_TLS_REJECT_UNAUTHORIZED='0'

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
