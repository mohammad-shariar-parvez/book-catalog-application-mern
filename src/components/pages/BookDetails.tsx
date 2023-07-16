/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/features/books/bookApi";
import Loader from "../atoms/Loader";
import ErrorMessage from "../atoms/Error";
import BookDescription from "../books/BookDescription";

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

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetSingleBookQuery(id);

  console.log("VIDEO id", id);
  console.log("VIDEO SINGLEEE", book);

  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMessage message="There is an Error!" />;
  }

  if (!isLoading && !isError && book?.data.id) {
    content = (
      <section className="wrapper  ">
        <div className=" gap-4 pt-24 md:pt-6 flex items-center justify-center  ">
          <BookDescription book={book} />
        </div>
      </section>
    );
  }

  return <div>{content}</div>;
};

export default BookDetails;
