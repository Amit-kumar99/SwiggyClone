import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Error from "./components/Error";

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
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
)
