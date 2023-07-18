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

const WishList = () => {
  const { books } = useAppSelector((state) => state.wishList);
  console.log("YA", books);

  return (
    <div>
      <div>
        <h1>Wish List</h1>
      </div>
      <section className="wrapper  ">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-24 md:pt-6 ">
          {books.map((book: IBook) => (
            <SingleCard key={book.id} book={book} wishList={true} />
          ))}
          {/* {data.data ? data.data.slice(0, 10).map((book:IBook) => (
		  <SingleCard key={book.id } book={book} />
		))} */}
        </div>
      </section>
    </div>
  );
};

export default WishList;
