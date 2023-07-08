import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import DevScreen from './components/screens/DevScreen'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DevScreen/>,
  },{
    path: "/components",
    element: <>Components Here</>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
