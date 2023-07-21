/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from "react";
import Input from "../atoms/Input";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../atoms/Toaster";

interface FormValues {
  email: string;
  password: string;
}

const initialFormValues: FormValues = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const [login, { data, error: responseError, isSuccess, isError }] =
    useLoginMutation();
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isSuccess && data?.data && location.state?.from) {
      navigate(location.state.from);
    }
    if (isSuccess && data?.data && !location.state?.from) {
      navigate("/");
    }
  }, [data, responseError, navigate, isSuccess, location]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: Partial<FormValues> = {};

    // Perform custom validation
    if (formValues.email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (formValues.password.trim() === "") {
      validationErrors.password = "Password is required";
    }
    // If there are errors, set them and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Registration logic here...

    // Reset the form
    void login({
      email: formValues.email,
      password: formValues.password,
    });
    setFormValues(initialFormValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto pb-2">
        <div>
          <Input
            label="Email:"
            name="email"
            type="email"
            value={formValues.email}
            error={errors.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <Input
            label="Password:"
            name="password"
            type="password"
            value={formValues.password}
            error={errors.password}
            required
            onChange={handleChange}
          />
        </div>

        <div className="gap-x-6 space-x-6">
          <button
            type="submit"
            className="text-white bg-golden hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
          >
            Login
          </button>
        </div>
      </form>
      {isError && <Toast message={"Could not login"} color={"red"} />}
    </>
  );
};

export default LoginForm;
