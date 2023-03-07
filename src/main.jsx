import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/Login/Login';
import Home from './views/Login/Home/Home';
import Products from './views/Login/Products/Products';
import Pay from './views/Login/Pay/Pay';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products/:productsId",
    element: <Products />,
  },
  {
    path: "/pay/:payId",
    element: <Pay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
