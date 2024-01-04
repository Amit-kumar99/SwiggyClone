import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import Cart from "./components/Cart"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import MenuItems from './components/MenuItems.jsx';

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
        element: <Signin/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/menu",
        element: <MenuItems/>
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
