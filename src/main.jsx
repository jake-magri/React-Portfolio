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
import Blog from './components/pages/Blog-Page/Blog.jsx';
import Resources from './components/pages/Resources.jsx';
import Projects from './components/pages/Projects-Page/Projects.jsx';
import Resume from './components/pages/Resume.jsx';
import BlogPost from './components/pages/Blog-Page/BlogPost.jsx';

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
                path: 'blogs', 
                element: <Blog />,
            },
            {
                path: 'resources', 
                element: <Resources />,
            },
            {
                path: 'contact', 
                element: <Contact />,
            },
            { path: 'blogs/:slug', element: <BlogPost /> }, // Dynamic route for individual blog posts
        ],
    }
]);

// mount router to the dom
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
