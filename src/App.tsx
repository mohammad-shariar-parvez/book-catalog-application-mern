/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import MainLayout from "./components/layouts/MainLayout";
import { userLoggedIn } from "./redux/features/auth/authSlice";
import { useAppDispatch } from "./redux/hook";

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const userData = JSON.parse(localStorage.getItem("auth") || "");

  if (userData?.accessToken && userData.user) {
    console.log("User data local stoge", userData);
    dispatch(userLoggedIn(userData));
  }
  return <MainLayout />;
}

export default App;
