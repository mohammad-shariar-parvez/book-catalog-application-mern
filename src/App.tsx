/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import MainLayout from "./components/layouts/MainLayout";
import { userLoggedIn } from "./redux/features/auth/authSlice";
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
  return <MainLayout />;
}

export default App;
