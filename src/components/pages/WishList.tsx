import { useAppSelector } from "../../redux/hook";
import Header from "../Header";
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

  return (
    <div>
      <Header />

      <section className="wrapper  ">
        {books.length == 0 && (
          <div className="p-16 text-center h-full">
            <h3>No Wishlist Added</h3>
          </div>
        )}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 pt-24 md:pt-6 ">
          {books.map((book: IBook) => (
            <SingleCard key={book.id} book={book} wishList={true} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WishList;
