import { Outlet } from 'react-router-dom';
import NavTabs from './header and navtabs/NavTabs';
import Footer from './footer/Footer.jsx';

<<<<<<< HEAD
=======
// portfolio container component contains NavTabs as header, outlet in main for routes, and footer components
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
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
