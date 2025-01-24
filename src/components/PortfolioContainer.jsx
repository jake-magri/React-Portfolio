import { Outlet } from 'react-router-dom';
import NavTabs from './header and navtabs/NavTabs';
import Footer from './footer/Footer.jsx';

// portfolio container component contains NavTabs as header, outlet in main for routes, and footer components
export default function PortfolioContainer() {
  return (
    <div>
      <NavTabs />
      <main className="mx-auto">
        <Outlet/>
        </main>
      <Footer/>
    </div>
  );
};
