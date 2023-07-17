/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { useState } from "react";
import {
  addBookWishList,
  removeBookWishList,
} from "../../redux/features/wishList/wishListSlice";
import {
  addFutureBook,
  removeFutureBook,
} from "../../redux/features/futureBooks/futureBooksSlice";

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
  _id: string;
}

interface IProps {
  book: IBook;
  wishList?: boolean;
  futureBooks?: boolean;
}

const SingleCard = ({ book, wishList, futureBooks }: IProps) => {
  const dispatch = useAppDispatch();

  const [finsih, setFinish] = useState(false);
  const handleWishList = () => {
    dispatch(addBookWishList(book));
  };
  const handleRemove = () => {
    dispatch(removeBookWishList(book));
  };

  const handleFutureBooks = () => {
    dispatch(addFutureBook(book));
  };
  const handleRemoveFutureBooks = () => {
    dispatch(removeFutureBook(book));
  };

  const handleBookFinished = () => {
    setFinish(true);
  };

  console.log("WIISDH ", wishList);

  return (
    <div className=" ">
      <div className="flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  ">
        <Link to={`/${book.id}`}>
          <img
            className="object-cover    rounded-l-lg h-48  md:h-auto w-48"
            src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
            alt=""
          />
        </Link>

        <div className="text-left text-lg p-3 flex-col  justify-between md:flex-col  self-start w-full ">
          <div className="flex items-center justify-between">
            <div>
              {finsih && (
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
                  Green
                </span>
              )}
            </div>

            <div className=" flex justify-end text-lg space-x-2">
              {!futureBooks && !wishList && (
                <button onClick={handleWishList}>
                  <i className=" text-2xl text-gray-400 bx bx-book-heart "></i>
                </button>
              )}
              {wishList && (
                <button onClick={handleRemove}>
                  <i className=" text-2xl  bx bxs-trash text-red-500 "></i>
                </button>
              )}
              {!futureBooks && !wishList && (
                <button onClick={handleFutureBooks}>
                  <i className="text-gray-400 text-2xl bx bx-book-open  "></i>
                </button>
              )}
              {futureBooks && (
                <button onClick={handleRemoveFutureBooks}>
                  <i className=" text-2xl bx bxs-trash text-red-500 "></i>
                </button>
              )}
              {futureBooks && (
                <button onClick={handleBookFinished} disabled={finsih}>
                  <i className="text-green-500 text-2xl bx bxs-check-square  "></i>
                </button>
              )}
            </div>
          </div>

          <Link to={`/${book.id}`}>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
