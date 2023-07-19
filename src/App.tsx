/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import MainLayout from "./components/layouts/MainLayout";

function App(): JSX.Element {
  const userData = JSON.parse(localStorage.getItem("auth") || "");
  console.log("User data local stoge", userData);
  // if (userData.accessToken && userData.user) {
  //   store.dispatch(userLoggedIn(userData));

  return <MainLayout />;
}

export default App;
