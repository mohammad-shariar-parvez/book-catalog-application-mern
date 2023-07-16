import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-gray-800 text-white py-2 px-4 rounded-md shadow">
          {message}
        </div>
      )}
    </>
  );
};

export default Toast;
