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
import { SpeedInsights } from '@vercel/speed-insights/react';
import AdminNews from './Pages/AdminNews';
import PageNotFound from './Pages/NotFound';
import ErrorBoundary from './Pages/ErrorBoundary';
import ErrorPage from './Pages/ErrorPage';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const routes = [
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: '/contact', element: <Contact />,errorElement: <ErrorPage /> },
  { path: '/news', element: <NewsMedia />, errorElement: <ErrorPage />}, // ✅ Changed to match Navbar
  { path: '/research', element: <Research />,errorElement: <ErrorPage /> }, // ✅ Added Research page
  { path: '/partnership', element: <Partnership />,errorElement: <ErrorPage /> },
  { path: '/pipeline', element: <Pipeline /> ,errorElement: <ErrorPage />},
  { path: '/platform', element: <Platform />,errorElement: <ErrorPage />, },
  { path: '/about', element: <About />,errorElement: <ErrorPage />, },
  { path: '*', element: <PageNotFound/>,errorElement: <ErrorPage />, },
  {path: '/admin',element: <AdminNews />,errorElement: <ErrorPage />,}
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
  return (
  <>
    <ErrorBoundary>
      <RouterProvider router={router} />
      <SpeedInsights />
    </ErrorBoundary>
    </>
  );

}

export default App;
