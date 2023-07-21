/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link } from "react-router-dom";

const NavLinks = ({ value }: { value: boolean }) => {
  const Links = [
    {
      name: "Home",
      link: "/",
      icon: "bx bx-home-alt",
    },
    {
      name: "All Books",
      link: "/allbooks",
      icon: "  bx bx-info-circle",
    },
    {
      name: "Add Book",
      link: "/addBook",
      icon: "bx bx-book-add",
    },
    {
      name: "",
      link: "",
      icon: "",
    },
  ];

  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className=" hover:text-yellow-600 shrink-0 ">
          <Link
            className={` ${
              value
                ? " md:text-white  nav-button  "
                : " md:text-white  nav-button     "
            }hover:text-yellow-500  flex flex-col items-center `}
            to={link.link}
          >
            {link.name != "Book a Table" && (
              <span className="text-2xl md:hidden">
                <i className={`${link.icon}`}></i>
              </span>
            )}

            {link.name}
          </Link>
        </li>
      ))}
      <li className="hover:text-yellow-600 shrink-0 hidden md:static">
        <Link
          className={`${
            value && "rounded-lg  "
          } ' text-white  bg-golden p-2  hover:opacity-80 rounded-lg  `}
          to="/addBook"
        >
          Add Book
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
