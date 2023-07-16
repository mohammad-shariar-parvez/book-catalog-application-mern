/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { Link } from "react-router-dom";

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
interface BookDescriptionProps {
  book: IBook;
}

const BookDescription = ({ book }) => {
  console.log("finallll", book.data.reviews);

  return (
    <div>
      <div className=" ">
        <Link
          to={`/${book?.data.id}`}
          className="flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  "
        >
          <img
            className="object-cover w-1/2 rounded-lg md:rounded-none md:rounded-l-lg h-48  md:h-auto md:w-1/2"
            src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
            alt=""
          />

          <div className="text-left text-lg p-3 flex-col  justify-between md:flex-col  self-start  ">
            <h5 className="mb-2  ">{book?.data.title}</h5>
            <p>
              <span className="text-black font-semibold">Author:</span>
              {book?.data.author}
            </p>
            <p className=" ">
              <span className="text-black font-semibold">Genre:</span>{" "}
              {book?.data.genre}
            </p>
            <p className="">
              <span className="text-black font-semibold">Publication Date</span>{" "}
              {book?.data.publicationDate}
            </p>
            <div className="flex items-center space-x-6 justify-center ">
              <Link
                className="rounded-lg  text-white  bg-golden p-2  hover:opacity-80 rounded-lg  "
                to="/"
              >
                Edit Book
              </Link>
              <Link
                className="rounded-lg  text-white  bg-golden p-2  hover:opacity-80 rounded-lg  "
                to="/"
              >
                Delete Book
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div className="py-11">
        <h2>User Reviews</h2>
        <div className="space-y-4 pt-8">
          {book.data.reviews.map((review, index) => (
            <div
              key={book?.data.id}
              className="p-4 border rounded-lg shadow-md"
            >
              <p className="text-gray-700 font-medium text-lg mb-2">{review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
