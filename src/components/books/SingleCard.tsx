import React from "react";

const SingleCard = () => {
  return (
    <div className=" ">
      <a
        href="#"
        className="flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  "
      >
        <img
          className="object-cover w-full rounded-lg md:rounded-none md:rounded-l-lg h-48  md:h-auto md:w-48"
          src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
          alt=""
        />

        <div className="text-left text-lg p-3 flex-col  justify-between md:flex-col  self-start  ">
          <h5 className="mb-2  ">Noteworthy technology acquisitions</h5>
          <p className="mb-3 text-sm">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
};

export default SingleCard;
