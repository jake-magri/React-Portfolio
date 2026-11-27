import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import '../styles/NavTabs.css';
import NavTabs from '../components/header/nav/NavTabs';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Jake Magri | Software Developer</title>
        <meta key="description" name="description" content="C#/.NET, SQL, Azure, application implementation, testing, and enterprise delivery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Jake Magri" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#10261c" />
      </Head>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavTabs />
      <div id="main-content" tabIndex={-1}><Component {...pageProps} /></div>
      <Footer />
    </>
  );
};

export default App;
