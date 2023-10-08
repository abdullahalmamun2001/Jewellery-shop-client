import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Layout from './Layout/Layout';
import Register from './components/Pages/Register/Register';
import AuthProvider from './components/providers/AuthProvider';
import Login from './components/Pages/Login/Login';
import Addjewellery from './components/DashBoard/AddJewellery';
import AllJewellery from './components/Pages/AllJewellery/AllJewellery';
import MyJewellary from './components/Pages/MyJewellary/MyJewellary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addjewellery",
        element: <Addjewellery></Addjewellery>,
      },
      {
        path: "/alljewellery",
        element: <AllJewellery></AllJewellery>,
      },
      {
        path: "/myjewellery",
        element: <MyJewellary></MyJewellary>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
