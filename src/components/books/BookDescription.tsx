/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import {
  useDeleteBookMutation,
  useEditBookMutation,
} from "../../redux/features/books/bookApi";
import Toast from "../atoms/Toaster";
import ErrorMessage from "../atoms/Error";

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
  const [deleteBook, { isSuccess, isError }] = useDeleteBookMutation();
  const [editBook, { isError: editedbookError }] = useEditBookMutation();
  const [showToast, setShowToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void editBook({
      id: book.id,
      data: {
        reviews: inputValue,
      },
    });
    setInputValue("");
  };

  const handleModalCancel = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleModalConfirm = () => {
    setIsDelete(!isDelete);
  };

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
    if (isError) {
      setErrorToast(true);
    }
  }, [navigate, isSuccess, isError]);

  const handleDelete = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isDelete) {
      if (book.id) {
        void deleteBook(book.id);
        setIsModalOpen(false);
      }
    }
  }, [book.id, deleteBook, isDelete]);

  return (
    <div>
      <div className=" ">
        {showToast && (
          <Toast message={"Book Deleted Successfully"} color="green" />
        )}

        {errorToast && <Toast message={"Could not Delete "} color="red" />}
        {editedbookError && (
          <Toast message={"Could not add Comment "} color="red" />
        )}
        <Link
          to={`/${book?.id}`}
          className="flex flex-col items-center   shadow    "
        >
          <img
            className="object-cover w-72 rounded-lg  rounded-l-lg h-auto "
            src={book.image}
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
              {user?.id == book?.userId && (
                <Link
                  className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  to={`/editBook/${book?.id}`}
                >
                  Edit
                </Link>
              )}
              {user?.id == book?.userId && (
                <button
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                  // to={`/deleteBook/${book?.id}`}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}

              {/* MOOODAAL */}
            </div>
            {/* MOOODAAL CLOSED */}
          </div>
        </Link>
      </div>
      {/* -------ADD COMMENTS */}
      <div>
        <form onSubmit={handleSubmitComment}>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
            <div className="px-4 py-2 bg-white rounded-t-lg ">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows={4}
                className="w-full px-0 text-sm  bg-white    dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
                value={inputValue}
                onChange={handleComment}
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t ">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
              <div className="flex pl-0 space-x-1 sm:pl-2">
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                    />
                  </svg>
                  <span className="sr-only">Attach file</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  <span className="sr-only">Set location</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </form>
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
          Remember, contributions to this topic should follow our{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            Community Guidelines
          </a>
          .
        </p>
      </div>
      {editedbookError && <ErrorMessage message="Could not post comment" />}
      {/* -------ADD COMMENTS FINISH */}
      <div className=" py-11 left-8 ">
        <h3>User Reviews</h3>
        <div className="space-y-4 pt-8">
          {book.reviews
            .slice(-10)
            .reverse()

            .map((review) => (
              <div key={book?.id} className="p-4 border rounded-lg shadow-md">
                <p className="text-gray-700 font-medium text-lg mb-2">
                  {review}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/*MODAL  */}
      {/* <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"> */}
      {isModalOpen && (
        <div
          id="popup-modal"
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-gray-800 bg-opacity-50  "
        >
          <div className=" relative rounded-lg shadow bg-white  md:w-1/2 flex items-center justify-center   ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this Book?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-golden hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={handleModalConfirm}
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={handleModalCancel}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDescription;
