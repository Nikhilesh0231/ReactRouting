import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';

function App() {
  let allRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact us',
      element: <ContactUs />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={allRoutes}>

      </RouterProvider>
    </div>
  );
}

export default App;
