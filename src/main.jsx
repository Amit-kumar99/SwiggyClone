import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import Cart from "./components/Cart"
import Login from "./components/Login"
import Signup from "./components/Signup"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/signin",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
)
