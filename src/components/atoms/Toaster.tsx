import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  // const [showToast, setShowToast] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowToast(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 
        opacity-100 pointer-events-auto`}
    >
      <div
        id="toast-success"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
      </div>
    </div>
  );
};

export default Toast;
