import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Articles from './Pages/Articles';
import Profile from './Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: 'articles',
      element: <Articles />
    }, {
      path: 'users/:userId',
      element: <Profile />
    }]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
