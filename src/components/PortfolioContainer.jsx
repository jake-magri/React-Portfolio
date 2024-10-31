import { Outlet } from 'react-router-dom';
import NavTabs from './header and navtabs/NavTabs';
import Footer from './footer/Footer';

export default function PortfolioContainer() {
  return (
    <div>
      <NavTabs />
      <main className="mx-3">
        <Outlet/>
        </main>
      <Footer/>
    </div>
  );
};
