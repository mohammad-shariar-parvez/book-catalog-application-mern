import React from "react";
import SingleCard from "./SingleCard";

const BookCard = () => {
  return (
    <section className="wrapper  ">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-24 md:pt-6 ">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </section>
  );
};

export default BookCard;
