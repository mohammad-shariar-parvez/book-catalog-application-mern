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
  const [deleteBook, { data, isSuccess }] = useDeleteBookMutation();
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
          className="flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  "
        >
          <img
            className="object-cover w-1/2 rounded-lg md:rounded-none md:rounded-l-lg h-48  md:h-auto md:w-1/2"
            src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
            alt=""
          />

          <div className="text-left text-lg p-3 flex-col  justify-between md:flex-col  self-start  ">
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
            <div className="flex items-center space-x-6 justify-center ">
              {user?.userId != book?.id && (
                <Link
                  className="rounded-lg  text-white  bg-golden p-2  hover:opacity-80  "
                  to={`/editBook/${book?.id}`}
                >
                  Edit Book
                </Link>
              )}
              {user?.userId != book?.id && (
                <button
                  className="rounded-lg  text-white  bg-golden p-2  hover:opacity-80  "
                  // to={`/deleteBook/${book?.id}`}
                  onClick={handleDelete}
                >
                  Delete Book
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
