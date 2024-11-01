<<<<<<< HEAD
=======
// import styles, components, and dependencies
// using bootstrap styles
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe.jsx';
import Contact from './components/pages/Contact.jsx';
import Projects from './components/pages/Projects.jsx';
import Resume from './components/pages/Resume.jsx';

<<<<<<< HEAD
=======
// create routes with browserRouter
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
<<<<<<< HEAD
        // errorElement: <Error />,
=======
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
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

<<<<<<< HEAD
=======
// mount router to the dom
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
