import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aditya Sharma</title>
        <link rel="icon" href="data:," type="image/x-icon" />
        
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
