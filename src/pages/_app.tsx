import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

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
