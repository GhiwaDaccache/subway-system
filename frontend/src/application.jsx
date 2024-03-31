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
import Branch from './pages/branch';
import Inbox from './pages/branch/Inbox';
import Reviews from './pages/branch/Reviews';

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

  {
    path: '/branch',
    element: <Branch />,
    children: [
      {
        path: 'pages/branch/Reviews',
        element: <Reviews />,
      },
      {
        path: 'pages/branch/Inbox' ,
        element: <Inbox />,
      },
    ],
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
