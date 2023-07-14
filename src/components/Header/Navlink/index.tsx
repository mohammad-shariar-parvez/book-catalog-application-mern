import { Link } from "react-router-dom";

const NavLinks = ({ value }) => {
  const Links = [
    {
      name: "All Books",
      link: "/",
      icon: "bx bx-info-circle",
    },
  ];

  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className=" hover:text-yellow-600 ">
          <Link
            className={` ${
              value
                ? " md:text-black  nav-button  "
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
      <li className="hover:text-yellow-600 ">
        <Link
          className={`${
            value ? "  md:rounded-none  " : "   rounded-lg  "
          } ' text-white  bg-golden p-3  hover:opacity-80 rounded-lg  `}
          href="/"
        >
          Book Table
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
