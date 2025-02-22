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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap" rel="stylesheet"/>
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
