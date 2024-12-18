import {createBrowserRouter,} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement : <h2>page not found</h2>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/register',
          element : <Register></Register>
        }
      ]
    },
  ]);

  export default router;