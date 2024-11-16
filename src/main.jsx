import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home/Home.jsx";
import Authentication from "./components/common/Authentication.jsx";
import RestaurantMenu from "./components/Pages/RestaurantMenu/RestaurantMenu.jsx";
import Error from "./components/Pages/Error/Error.jsx";
import MyAccount from "./components/Pages/Profile/MyAccount.jsx";
import Checkout from "./components/Pages/Checkout/Checkout.jsx";
import PaymentMethods from "./components/Pages/PaymentMethods/PaymentMethods.jsx";
import About from "./components/Pages/About.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <Authentication />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
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
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
