/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { addBookWishList } from "../../redux/features/wishList/wishListSlice";

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
  book: IBook;
}

const SingleCard = ({ book }: IProps) => {
  const dispatch = useAppDispatch();
  const handleWishList = () => {
    dispatch(addBookWishList(book));
  };

  return (
    <div className=" ">
      <div className="flex  items-center bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  ">
        <Link to={`/${book.id}`}>
          <img
            className="object-cover  w-1/2 rounded-lg md:rounded-none md:rounded-l-lg h-48  md:h-auto md:w-48"
            src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
            alt=""
          />
        </Link>

        <div className="text-left text-lg p-3 flex-col  justify-between md:flex-col  self-start w-full ">
          <div className=" flex justify-end text-lg space-x-2">
            <button onClick={handleWishList}>
              <i className=" text-2xl text-gray-400 bx bx-book-heart "></i>
            </button>
            <i className="text-gray-400 text-2xl bx bx-check-square  "></i>
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
