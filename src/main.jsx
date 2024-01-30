import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Authentication from './components/Authentication.jsx';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import Error from "./components/Error";
import MyAccount from './components/MyAccount.jsx';

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
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/restaurants/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
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
