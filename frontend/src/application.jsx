import React from 'react';

import './styles/buttons.css';
import './styles/colors.css';
import './styles/utilities.css';

import App from './pages/app';
import Admin from './pages/admin';
import Authentication from './pages/authentication';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/app/pages/home';
import Profile from './pages/app/pages/profile';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
    errorElement: <NotFoundPage />,
  },

  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: '/app/',
        element: <Home />,
      },
      {
        path: '/app/profile' /* later on will be modified /app/profile/:profileId' */,
        element: <Profile />,
      },
    ],
    errorElement: <NotFoundPage />,
  },

  {
    path: '/admin',
    element: <Admin />,
    errorElement: <NotFoundPage />,
  },
]);

function Application() {
  return (
    // <div>
    //   <Authentication />
    //   <App />
    //   <Admin />
    // </div>
    <RouterProvider router={router} /> // Router Provider built using context api
  );
}

export default Application;
