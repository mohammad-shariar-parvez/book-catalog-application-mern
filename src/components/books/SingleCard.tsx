/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
}

interface IProps {
  product: IBook;
}

const SingleCard = ({ book }: IProps) => {
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
          <h5 className="mb-2  ">{book.title}</h5>
          <p>
            <span className="text-black font-semibold">Author:</span>
            {book.author}
          </p>
          <p className=" ">
            <span className="text-black font-semibold">Genre:</span>{" "}
            {book.genre}
          </p>
          <p className="">
            {" "}
            <span className="text-black font-semibold">
              Publication Date
            </span>{" "}
            {book.publicationDate}
          </p>
        </div>
      </a>
    </div>
  );
};

export default SingleCard;
