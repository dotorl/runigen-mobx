import '@styles/globals.css';
import { Provider } from 'mobx-react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // const stroe =
  return <Component {...pageProps} />;
}

export default MyApp;
