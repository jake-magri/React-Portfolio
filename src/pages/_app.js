// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'; // Global styles
import '../styles/NavTabs.css'; // Styles for the navigation tabs
import NavTabs from '../components/header/NavTabs';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <>
        <Head>
        {/* Global meta tags can go here, if needed */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
      </Head>
        <NavTabs />
          <Component {...pageProps} />
        <Footer />
        </>
      );
};

export default App;
