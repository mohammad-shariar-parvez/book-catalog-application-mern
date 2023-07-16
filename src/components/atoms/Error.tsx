import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-500 text-white font-semibold p-4 rounded">
      {message}
    </div>
  );
};

export default ErrorMessage;
