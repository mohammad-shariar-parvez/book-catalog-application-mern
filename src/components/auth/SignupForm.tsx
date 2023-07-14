import React from "react";

import Label from "../atoms/Label";
import Input from "../atoms/Input";

const SignupForm = () => {
  return (
    <form>
      <div className="relative z-0 w-full mb-5 group">
        <Input
          type="email"
          name="floating_email"
          id="floating_email"
          placeholder=""
          required
        />

        <Label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </Label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <Input
          type="password"
          name="floating_password"
          id="floating_password"
          placeholder=" "
          required
        />
        <Label htmlFor="floating_password">Password</Label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <Input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          placeholder=" "
          required
        />
        <Label htmlFor="floating_repeat_password">Confirm password</Label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <Input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            placeholder=" "
            required
          />
          <Label htmlFor="floating_first_name">First name</Label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <Input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            placeholder=" "
            required
          />
          <Label htmlFor="floating_last_name">Last name</Label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <Input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            placeholder=" "
            required
          />
          <Label htmlFor="floating_phone">Phone number </Label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-golden hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignupForm;
