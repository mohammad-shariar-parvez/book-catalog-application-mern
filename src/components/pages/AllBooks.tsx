/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useGetBooksWithFilterQuery } from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";
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
  const { queryUrl } = useAppSelector((state) => state.filterCategory);
  const { data: filteredBooks } = useGetBooksWithFilterQuery(
    queryUrl.queryString,
  );

  const books: IBook[] = filteredBooks ? filteredBooks["data"] : [];

  // console.log("Global book", filteredBooks);
  // console.log("QUERY", queryString);
  console.log("DROPDOWNS", queryUrl);

  return (
    <section className="wrapper  ">
      <h1 className="text-center">All Books</h1>
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
