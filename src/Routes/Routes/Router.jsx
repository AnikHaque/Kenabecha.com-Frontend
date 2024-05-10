import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import { Home } from "../../Pages/Home/Home";
import ProductList from "../../Components/Products/ProductList";
import Registration from "../../Pages/Login/Registration";
import VerifyOtp from "../../Pages/Login/VerifyOtp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <ProductList></ProductList>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/verify-otp",
        element: <VerifyOtp></VerifyOtp>,
      },
    ],
  },
]);

export default router;
