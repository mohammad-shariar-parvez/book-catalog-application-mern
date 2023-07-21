/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from "react";
import Input from "../atoms/Input";
import { useSignupMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import Toast from "../atoms/Toaster";
import Loader from "../atoms/Loader";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialFormValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm: React.FC = () => {
  const [
    signup,
    { data, error: responseError, isSuccess, isError, isLoading },
  ] = useSignupMutation();
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && data?.data) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [data, responseError, navigate, isSuccess]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: Partial<FormValues> = {};

    // Perform custom validation
    if (formValues.firstName.trim() === "") {
      validationErrors.firstName = "Fisrtname is required";
    }
    if (formValues.lastName.trim() === "") {
      validationErrors.firstName = "Lastname is required";
    }
    if (formValues.email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (formValues.password.trim() === "") {
      validationErrors.password = "Password is required";
    }
    if (formValues.confirmPassword.trim() === "") {
      validationErrors.confirmPassword = "Confirm Password is required";
    }
    if (formValues.password !== formValues.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, set them and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    //send to reducer

    void signup({
      name: {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
      },
      email: formValues.email,
      password: formValues.password,
    });

    // Registration logic here...

    // Reset the form
    setFormValues(initialFormValues);
  };
  const handleReset = () => {
    setFormValues(initialFormValues);
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto ">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Input
              label="Firstname:"
              name="firstName"
              type="text"
              value={formValues.firstName}
              error={errors.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Input
              label="LastName:"
              name="lastName"
              type="text"
              value={formValues.lastName}
              error={errors.lastName}
              required
              onChange={handleChange}
            />
          </div>
        </div>
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
        <div className="relative z-0 w-full mb-6 group">
          <Input
            label="Confirm Password:"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            error={errors.confirmPassword}
            required
            onChange={handleChange}
          />
        </div>

        <div className="gap-x-6 space-x-6">
          <button
            type="submit"
            className="text-white bg-golden hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Reset
          </button>
        </div>
      </form>
      {isSuccess && (
        <Toast message={"Account Created Successfully"} color={"green"} />
      )}
      {isError && <Toast message={"Could not Signin"} color={"red"} />}
      {isLoading && <Loader />}
    </>
  );
};

export default SignupForm;
