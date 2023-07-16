/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import {
  useGetBooksQuery,
  useGetFilteredBooksQuery,
} from "../../redux/features/books/bookApi";
import BookCard from "../books/BookCard";

const Home = () => {
  const [queryUrl, setQueryUrl] = useState("");
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  // const { data, isLoading, error } = useGetFilteredBooksQuery();

  // const handleSearch = ()=>{

  // }

  //   let queryUrl = "";
  //   if (search) {
  //     // console.log("SEARCH from Mmain", sort);
  //     queryUrl += `searchTerm=${search}`;
  //   }
  //   if (genre) {
  //     queryUrl += `&genre=${genre}`;
  //   }
  //   if (publicationDate) {
  //     queryUrl += `&publicationDate=${publicationDate}`;
  //   }

  // console.log("BOOOKS hooome", data);

  return (
    <div>
      <BookCard />
    </div>
  );
};

export default Home;
