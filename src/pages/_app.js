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
        <title>Jake Magri | AI Workflow Automation</title>
        <meta name="description" content="AI workflow automation for finance operations, bookkeeping workflows, document intelligence, reporting systems, and practical technical enablement." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Jake Magri" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#10261c" />
      </Head>
      <NavTabs />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
