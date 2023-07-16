import React from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  value,
  error,
  required,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-600 ">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};
export default Input;
