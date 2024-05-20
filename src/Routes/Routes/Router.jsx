import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import { Home } from "../../Pages/Home/Home";
import ProductList from "../../Components/Products/ProductList";
import Registration from "../../Pages/Login/Registration";
import VerifyOtp from "../../Pages/Login/VerifyOtp";
import Login from "../../Pages/Login/Login";
import ProductDetails from "../../Components/Products/ProductDetails";
import DashboardLayout from "../../Layout/DashboardLayout";
import Categories from "../../Components/Categories/Categories";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:productId",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/admin/all-member",
        element: <Categories></Categories>,
      },
    ],
  },
]);

export default router;
