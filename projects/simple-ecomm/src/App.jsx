import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AboutUs from './components/aboutus/AboutUs';
import RoutingError from './components/RoutingError';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <RoutingError />, // Handle 404 or other errors
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'register',
          element: <Register />,
          
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'aboutus',
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
