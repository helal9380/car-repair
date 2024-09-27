import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Home/Service";
import About from "../Pages/Home/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/service',
          element: <Service></Service>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
      ]
    },
  ]);
  export default router;