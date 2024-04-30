import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AllTouristsSpot from './components/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from './components/AddTouristsSpot/AddTouristsSpot';
import MyList from './components/MyList/MyList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CardDetails from './components/CardDetails';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AuthProvider from './Providers/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3006/addSpot'),
      },
      {
        path: '/allSpot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:3006/addSpot')
      },
      {
        path: '/addSpot',
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path: '/myList',
        element: <MyList></MyList>
      },
      {
        path: '/spot/:_id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('http://localhost:3006/addSpot'),
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
