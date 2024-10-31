import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe.jsx';
import Contact from './components/pages/Contact.jsx';
import Projects from './components/pages/Projects.jsx';
import Resume from './components/pages/Resume.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <Error />,
        children: [
            {
                index: true, // This makes the AboutMe component render for the root path '/'
                element: <AboutMe />,
            },
            {
                path: 'portfolio', 
                element: <Projects />,
            },
            {
                path: 'resume', 
                element: <Resume />,
            },
            {
                path: 'contact', 
                element: <Contact />,
            },
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
