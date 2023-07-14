import { Outlet } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
}
