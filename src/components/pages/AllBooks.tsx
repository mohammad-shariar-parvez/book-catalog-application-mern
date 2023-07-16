/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";

import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import SingleCard from "../books/SingleCard";

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
  const [queryUrl, setQueryUrl] = useState("");
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  const books: IBook[] = data ? data["data"] : [];
  //   const { data } = data;

  return (
    <section className="wrapper  ">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-24 md:pt-6 ">
        {books.map((book: IBook) => (
          <SingleCard key={book.id} book={book} />
        ))}
        {/* {data.data ? data.data.slice(0, 10).map((book:IBook) => (
		  <SingleCard key={book.id } book={book} />
		))} */}
      </div>
    </section>
  );
};

export default AllBooks;
