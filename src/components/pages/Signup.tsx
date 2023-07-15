import SignupForm from "../auth/SignupForm";
import Navbar from "../Header/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center   h-screen pt-40 ">
        <div className="bg-gray-100 p-4 rounded shadow-lg md:w-1/2 lg:w-1/3 px-10 pt-8 ">
          <SignupForm />
          <p>
            Alreary have account ?{" "}
            <Link className="text-blue-500 " to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
