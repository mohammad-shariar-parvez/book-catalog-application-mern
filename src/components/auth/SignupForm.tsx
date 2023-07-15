import React, { useState } from "react";
import Input from "../atoms/Input";

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
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

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

    // Registration logic here...
    console.log("Registration form submitted:", formValues);

    // Reset the form
    setFormValues(initialFormValues);
  };
  const handleReset = () => {
    setFormValues(initialFormValues);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
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
  );
};

export default SignupForm;

// /* eslint-disable @typescript-eslint/no-empty-function */
// import React, { useState, ChangeEvent, FormEvent } from "react";

// import Label from "../atoms/Label";
// import Input from "../atoms/Input";

// interface InputForms {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const inputForms: InputForms = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const SignupForm: React.FC = () => {
//   const [input, setInput] = useState<InputForms>({ ...inputForms });
//   const [pass, setPass] = useState(false);
//   const { firstName, lastName, email, password, confirmPassword } = input;

//   const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setInput((prevInput) => ({
//       ...prevInput,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setPass(true);
//       setInput({ ...inputForms, password: "", confirmPassword: "" });
//       setInput((prevInput) => ({
//         ...prevInput,
//         password: "",
//         confirmPassword: "",
//       }));
//       console.log("Input is ", password);
//     } else {
//       console.log("Input is----- ", inputForms);
//       setInput((prevInput) => inputForms);
//       // setInput(inputForms );
//     }
//   };
//   console.log("HEEEEEELLLLOOO", password);

//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   useEffect(() => {}, [input]);

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="relative z-0 w-full mb-5 group">
//         <Input
//           type="email"
//           name="email"
//           id="floating_email"
//           value={email}
//           placeholder=""
//           required
//           handleOnChange={handleOnChange}
//         />
//         <Label htmlFor="floating_email">Email address</Label>
//       </div>
//       <div className="relative z-0 w-full mb-6 group">
//         <Input
//           type="password"
//           name="password"
//           id="floating_password"
//           value={password}
//           placeholder=" "
//           required
//           handleOnChange={handleOnChange}
//         />
//         <Label htmlFor="floating_password">Password</Label>
//         {pass && <p className="text-red-500">Password not matched</p>}
//       </div>
//       <div className="relative z-0 w-full mb-6 group">
//         <Input
//           type="password"
//           name="confirmPassword"
//           id="floating_repeat_password"
//           value={confirmPassword}
//           placeholder=" "
//           required
//           handleOnChange={handleOnChange}
//         />
//         <Label htmlFor="floating_repeat_password">Confirm password</Label>
//         {pass && <p className="text-red-500">Password not matched</p>}
//       </div>
//       <div className="grid md:grid-cols-2 md:gap-6">
//         <div className="relative z-0 w-full mb-6 group">
//           <Input
//             type="text"
//             name="firstName"
//             id="floating_first_name"
//             value={firstName}
//             placeholder=" "
//             required
//             handleOnChange={handleOnChange}
//           />
//           <Label htmlFor="floating_first_name">First name</Label>
//         </div>
//         <div className="relative z-0 w-full mb-6 group">
//           <Input
//             type="text"
//             name="lastName"
//             id="floating_last_name"
//             value={lastName}
//             placeholder=" "
//             required
//             handleOnChange={handleOnChange}
//           />
//           <Label htmlFor="floating_last_name">Last name</Label>
//         </div>
//       </div>

//       <button
//         type="submit"
//         className="text-white bg-golden hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Sign in
//       </button>
//     </form>
//   );
// };

// export default SignupForm;
