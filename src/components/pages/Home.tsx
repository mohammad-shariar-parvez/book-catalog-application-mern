/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import {
  useGetBooksQuery,
  useGetFilteredBooksQuery,
} from "../../redux/features/books/bookApi";

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

  console.log("BOOOKS", data);

  return <div>Home</div>;
};

export default Home;
