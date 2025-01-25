// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css'; // Global styles
import '../styles/NavTabs.css'; // Styles for the navigation tabs
import NavTabs from '../components/header/NavTabs';
import Footer from '../components/footer/Footer';

const App = ({ Component, pageProps }) => {
    return (
        <>
        <NavTabs />
          <Component {...pageProps} />
        <Footer />
        </>
      );
};

export default App;
