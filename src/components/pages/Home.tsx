/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import BookCard from "../books/BookCard";

const Home = () => {
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
