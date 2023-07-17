import React from "react";
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
  _id: string;
}

const FutureBooks = () => {
  const { books } = useAppSelector((state) => state.futureBooks);
  console.log("YA", books);

  return (
    <div>
      <div>
        <h1>Future Books</h1>
      </div>
      <section className="wrapper  ">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-24 md:pt-6 ">
          {books.map((book: IBook) => (
            <SingleCard key={book.id} book={book} futureBooks={true} />
          ))}
          {/* {data.data ? data.data.slice(0, 10).map((book:IBook) => (
		  <SingleCard key={book.id } book={book} />
		))} */}
        </div>
      </section>
    </div>
  );
};

export default FutureBooks;
