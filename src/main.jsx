import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Authentication from './components/Authentication.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Error from "./components/Error";
import MyAccount from './components/MyAccount.jsx';
import Checkout from './components/Checkout.jsx';
import PaymentMethods from './components/PaymentMethods.jsx';

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
        element: <Authentication/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "/payment",
        element: <PaymentMethods />,
      }
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
)
