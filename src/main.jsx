// import styles, components, and dependencies
// using bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe.jsx';
import Contact from './components/pages/Contact.jsx';
import Projects from './components/pages/Projects-Page/Projects.jsx';
import Resume from './components/pages/Resume.jsx';

// create routes with browserRouter
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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

// mount router to the dom
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
