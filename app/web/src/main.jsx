import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import './css/index.css';


const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />
         }
      ]
   },
   {
      path: '/',
      children: [
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/register',
            element: <Register />
         }
      ]
   },
   {
      path: '*',
      element: <NotFound />
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);
