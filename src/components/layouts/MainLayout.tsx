import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer";

export default function MainLayout() {
  return (
    <div className="scroll-smooth font-poppins">
      <Outlet />
      <Footer />
    </div>
  );
}
