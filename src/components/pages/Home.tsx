/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";

const Home = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log("BOOOKS", data);

  return <div>Home</div>;
};

export default Home;
