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
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
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