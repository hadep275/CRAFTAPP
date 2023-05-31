import React from 'react'
import ReactDOM from 'react-dom/client'
import Shop from './routes/shop.jsx'
import ErrorPage from './routes/error-page.jsx';
import Contact from './routes/contact.jsx';
import LoginPage from './routes/login.jsx';
import RegistrationPage from './routes/Register.jsx';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
        children:[
        ]

      },
    ],
  }, 
  {
    path: "/register",
    element: <RegistrationPage />,
 
  },
  {
    path: "/login",
    element: <LoginPage />,
 
  },
  {
    path: "/contact",
    element: <Contact />,
 
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
