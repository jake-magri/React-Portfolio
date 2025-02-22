import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Canvas } from '@react-three/fiber';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global meta tags */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />          
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/images/controller-favicon.png" type="image/png" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;