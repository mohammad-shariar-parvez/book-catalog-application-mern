import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AllBooks from "../pages/AllBooks";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: (
          <PrivateRoute>
            <AllBooks />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

export default routes;
