/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./components/routes/routes.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { useAppDispatch } from "./redux/hook.ts";
import { userLoggedIn } from "./redux/features/auth/authSlice.tsx";

// const userData = JSON.parse(localStorage.getItem("auth") || "");
// if (userData.accessToken && userData.user) {
//   store.dispatch(userLoggedIn(userData));
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
);
