/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */

import LoginForm from "../auth/LoginForn";
import Navbar from "../Header/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center   h-screen">
        <div className="bg-gray-100 p-4 rounded shadow-lg md:w-1/2 lg:w-1/3 px-10 pt-8 ">
          <LoginForm />
          <p>
            Do not have an account ?{" "}
            <Link className="text-blue-500 " to="/signup">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
