import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  useLocation
} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NewsMedia from './Pages/News&Media';
import Research from './Pages/Research';
import Partnership from './Pages/Partnership';
import Pipeline from './Pages/Pipeline';
import Platform from './Pages/PlatformPage';
import About from './Pages/About';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AdminNews from './Pages/AdminNews'; // ✅ Added AdminNews page


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const routes = [
  { path: '/', element: <Home /> },
  { path: '/contact', element: <Contact /> },
  { path: '/news', element: <NewsMedia /> }, // ✅ Changed to match Navbar
  { path: '/research', element: <Research /> }, // ✅ Added Research page
  { path: '/partnership', element: <Partnership /> },
  { path: '/pipeline', element: <Pipeline /> },
  { path: '/platform', element: <Platform /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <div>404 Not Found</div> },
  {
  path: '/admin',
  element: <AdminNews />,
  ErrorBoundary: <div>Something went wrong with Admin News.</div>,
}
];

const router = createBrowserRouter(
  routes.map(route => ({
    ...route,
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        {route.element}
        <Footer />
      </>
    )
  }))
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
