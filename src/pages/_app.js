// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'; // Global styles
import '../styles/NavTabs.css'; // Styles for the navigation tabs
import NavTabs from '../components/header/nav/NavTabs';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <>
        <Head>
        <title>Jake Magri's Portfolio</title>
        <meta name="description" content="Jake Magri's portfolio showcasing full-stack web development skills in React, Node.js, and MERN stack projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Jake Magri" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1a4331" />
      </Head>
        <NavTabs />
          <Component {...pageProps} />
        <Footer />
        </>
      );
};

export default App;
