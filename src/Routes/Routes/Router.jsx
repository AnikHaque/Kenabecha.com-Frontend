import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import { Home } from "../../Pages/Home/Home";
import ProductList from "../../Components/Products/ProductList";

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
    ],
  },
]);

export default router;
