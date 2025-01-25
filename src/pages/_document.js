import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Canvas } from '@react-three/fiber';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global meta tags */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Other global SEO meta tags can go here */}
          <meta name="description" content="Your default description that applies to all pages" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
        <Main />
        <Canvas>
        
        </Canvas>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;