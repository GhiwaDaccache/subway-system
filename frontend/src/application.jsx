import React from 'react';

import App from './ui/pages/app';
import Admin from './ui/pages/admin';
import Authentication from './ui/pages/authentication';
import NotFoundPage from './ui/pages/NotFoundPage';
import Home from './ui/pages/app/pages/home';
import Profile from './ui/pages/app/pages/profile';
import Station from './ui/pages/app/pages/Station';
import Treasury from './ui/pages/app/pages/Treasury';
import Map from './ui/pages/app/pages/Map';
import Branch from './ui/pages/branch';
import Inbox from './ui/pages/branch/Inbox';
import Reviews from './ui/pages/branch/Reviews';
import Dashboard from './ui/pages/admin/pages/dashboard';
import InviteManagers from './ui/pages/admin/pages/add-managers';
import EditBranches from './ui/pages/admin/pages/edit-branches';
import CoinRequest from './ui/pages/admin/pages/coin-requests';

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
