import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
export default function Route() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <HomePage /> },
                { path: '/home', element: <HomePage /> },
                { path: 'about-us', element: <AboutUs /> },
                { path: 'contact-us', element: <ContactPage /> },
            ]
        }
    ]);
};