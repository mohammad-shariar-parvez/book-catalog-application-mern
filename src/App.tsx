/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import MainLayout from "./components/layouts/MainLayout";
import { userLoggedIn } from "./redux/features/auth/authSlice";
import { lStorgeFutureBooks } from "./redux/features/futureBooks/futureBooksSlice";
import { lStorgeWishList } from "./redux/features/wishList/wishListSlice";
import { useAppDispatch } from "./redux/hook";

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  // Check if the data exists in localStorage
  const storedData = localStorage.getItem("auth");
  const userData = storedData
    ? JSON.parse(storedData)
    : { accessToken: null, user: null };

  if (userData?.accessToken && userData.user) {
    dispatch(userLoggedIn(userData));
  }

  const storedFutureBooks = localStorage.getItem("futueBooks");
  const parsedFutureBooks = storedFutureBooks
    ? JSON.parse(storedFutureBooks)
    : {
        books: [],
        total: 0,
      };
  dispatch(lStorgeFutureBooks(parsedFutureBooks));
  const storedWishList = localStorage.getItem("wishList");
  const parsedWishList = storedWishList
    ? JSON.parse(storedWishList)
    : {
        books: [],
        total: 0,
      };
  dispatch(lStorgeWishList(parsedWishList));

  return <MainLayout />;
}

export default App;
