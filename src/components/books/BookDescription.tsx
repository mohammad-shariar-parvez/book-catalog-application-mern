/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useDeleteBookMutation } from "../../redux/features/books/bookApi";
import Toast from "../atoms/Toaster";

interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews: string[];
  createdAt: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
}
interface BookDescriptionProps {
  book: IBook;
}

const BookDescription = ({ book }: BookDescriptionProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      setShowToast(true);
      const timer = setTimeout(() => {
        navigate("/");
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [navigate, isSuccess]);

  const handleDelete = () => {
    if (book.id) {
      void deleteBook(book.id);
    }
  };
  console.log("DAATAA", user);
  // console.log("BOOKSD", book);

  return (
    <div>
      <div className=" ">
        {showToast && <Toast message={"Book Deleted Successfully"} />}
        <Link
          to={`/${book?.id}`}
          className="flex flex-col items-center   shadow    "
        >
          <img
            className="object-cover w-72 rounded-lg  rounded-l-lg h-auto "
            src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
            alt=""
          />

          <div className="text-left text-lg p-3 flex-col  justify-between md:flex-col  self-start w-full  ">
            <h5 className="mb-2  ">{book?.title}</h5>
            <p>
              <span className="text-black font-semibold">Author:</span>
              {book?.author}
            </p>
            <p className=" ">
              <span className="text-black font-semibold">Genre:</span>{" "}
              {book?.genre}
            </p>
            <p className="">
              <span className="text-black font-semibold">Publication Date</span>{" "}
              {book?.publicationDate}
            </p>
            <div className="flex items-center space-x-6 justify-between w-full py-4 ">
              {user?.userId != book?.id && (
                <Link
                  className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  to={`/editBook/${book?.id}`}
                >
                  Edit
                </Link>
              )}
              {user?.userId != book?.id && (
                <button
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                  // to={`/deleteBook/${book?.id}`}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </Link>
      </div>

      <div className="py-11">
        <h2>User Reviews</h2>
        <div className="space-y-4 pt-8">
          {book.reviews.map((review) => (
            <div key={book?.id} className="p-4 border rounded-lg shadow-md">
              <p className="text-gray-700 font-medium text-lg mb-2">{review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
