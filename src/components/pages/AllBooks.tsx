/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useEffect } from "react";
import { useGetBooksWithFilterQuery } from "../../redux/features/books/bookApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import SingleCard from "../books/SingleCard";
import { resetQuery } from "../../redux/features/filter/filterSlice";
import Header from "../Header";
import Loader from "../atoms/Loader";

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

const AllBooks = () => {
  const { queryString } = useAppSelector((state) => state.filterCategory);
  const { data: filteredBooks, isLoading } =
    useGetBooksWithFilterQuery(queryString);
  const dispatch = useAppDispatch();
  const books: IBook[] = filteredBooks ? filteredBooks["data"] : [];

  useEffect(() => {
    return () => {
      dispatch(resetQuery());
    };
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <Header />

      <section className="wrapper   ">
        {books.length == 0 && (
          <div className="text-center">
            <h3>No Books Found</h3>
          </div>
        )}
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-24 md:pt-6 ">
            {books.map((book: IBook) => (
              <SingleCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBooks;
