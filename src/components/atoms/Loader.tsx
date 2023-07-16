import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-400"></div>
    </div>
  );
};

export default Loader;
