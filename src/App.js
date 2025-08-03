import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NewsMedia from './Pages/News&Media';
import Partnership from './Pages/Partnership';
import Pipeline from './Pages/Pipeline';
import Platform from './Pages/PlatformPage';
import About from './Pages/About';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    },
    {
      path: '/contact',
      element: <div>
        <Navbar />
        <Contact />
        <Footer />
      </div>
    },
    {
      path: '/news-media',
      element: <div>
        <Navbar />
        <NewsMedia />
        <Footer />
      </div>
    },
    {
      path: '/partnership',
      element: <div>
        <Navbar />
        <Partnership />
        <Footer />
      </div>
    },
    {
      path: '/pipeline',
      element: <div>
        <Navbar />
        <Pipeline />
        <Footer />
      </div>
    },
    {
      path: '/platform',
      element: <div>
        <Navbar />
        <Platform />
        <Footer />
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    },
    { path: '*', element: <div>404 Not Found
      <Footer />
    </div> }
  ]
);



function App() {
  return (

    <div>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
