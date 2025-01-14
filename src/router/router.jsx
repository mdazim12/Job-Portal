import {createBrowserRouter,} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";


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
        },
        {
          path : '/signIn',
          element : <SignIn></SignIn>
        },
        {
          path : '/jobs/:id',
          element : <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader :({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path : '/JobsApply/:id',
          element : <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path : '/myApplication',
          element : <PrivateRoute> <MyApplication></MyApplication> </PrivateRoute>
        },
        {
          path : '/addJob',
          element : <PrivateRoute> <AddJob></AddJob> </PrivateRoute>
        },
        {
          path : '/myPostedJobs',
          element : <PrivateRoute> <MyPostedJobs></MyPostedJobs></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;