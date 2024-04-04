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
import Station from './pages/app/pages/Station';
import Treasury from './pages/app/pages/Treasury';
import Map from './pages/app/pages/Map';
import Branch from './pages/branch';
import Inbox from './pages/branch/Inbox';
import Reviews from './pages/branch/Reviews';
import Stations from './pages/branch/Stations';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/admin/pages/dashboard';
import InviteManagers from './pages/admin/pages/add-managers';
import EditBranches from './pages/admin/pages/edit-branches';
import CoinRequest from './pages/admin/pages/coin-requests';

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

      {
        path: '/app/stations',
        element: <Station />,
      },

      {
        path: '/app/map',
        element: <Map />,
      },

      {
        path: '/app/treasury',
        element: <Treasury />,
      },
    ],
    errorElement: <NotFoundPage />,
  },

  {
    path: '/admin',
    element: <Admin />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/admin/',
        element: <Dashboard />,
      },
      {
        path: '/admin/managers',
        element: <InviteManagers />,
      },
      {
        path: '/admin/branches',
        element: <EditBranches />,
      },
      {
        path: '/admin/coinrequests',
        element: <CoinRequest />,
      },
    ],
  },

  {
    path: '/branch',
    element: <Branch />,
    children: [
      {
        path: '/branch/',
        element: <Stations />,
      },
      {
        path: 'pages/branch/Reviews',
        element: <Reviews />,
      },
      {
        path: 'pages/branch/Inbox',
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
