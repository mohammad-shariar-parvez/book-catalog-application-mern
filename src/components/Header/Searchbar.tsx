/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { useGetAllBooksQuery } from "../../redux/features/books/bookApi";
import { useAppDispatch } from "../../redux/hook";
import {
  createGenre,
  createSearch,
  createYear,
} from "../../redux/features/filter/filterSlice";

const Searchbar = () => {
  const { data: allBooks } = useGetAllBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [showDropdownGenre, setShowDropdownGenre] = useState(false);
  const [showDropdownYear, setShowDropdownYear] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const dispatch = useAppDispatch();

  const uniqueGenres = [
    ...new Set(allBooks?.data.map((item: { genre: string }) => item.genre)),
  ];

  const uniquePublicationYear = [
    ...new Set(
      allBooks?.data.map((item: { publicationDate: string }) =>
        item.publicationDate.substring(0, 4),
      ),
    ),
  ];

  const handleToggleGenre = () => {
    setShowDropdownGenre((prevState) => !prevState);
    if (showDropdownGenre) {
      dispatch(createGenre(""));
    }
  };
  const handleToggleYear = () => {
    setShowDropdownYear((prevState) => !prevState);
    if (showDropdownYear) {
      dispatch(createYear(""));
    }
  };
  const handleGenre = (name: string) => {
    dispatch(createGenre(`&genre=${name}`));
  };
  const handlePublicationYear = (name: string) => {
    dispatch(createYear(`&publicationDate=${name}`));
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };
  const handleOnBlour = () => {
    dispatch(createSearch(""));
  };
  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createSearch(`&searchTerm=${searchItem}`));
    setSearchItem("");
  };
  //Scroll event

  useEffect(() => {
    // Event listener for 'scroll' event

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollUp = currentScrollPos > prevScrollPos;

      setShowDropdown(scrollUp);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const checkBar = () => {
    setConfirm(!confirm);
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <button
        className=" md:text-white  nav-button
      hover:text-yellow-500  items-center  shrink-0 p-3 py-4  fixed bottom-1 right-0 bg-red "
        onClick={checkBar}
      >
        <i className="bx bx-search md:hidden text-3xl "></i>
      </button>
      <form
        className={`md:static fixed top-16 left-0 right-0 p-2 bg-golden md:bg-inherit transition-opacity duration-200 ease-in-out  pointer ${
          !showDropdown ? "opacity-100" : "opacity-0"
        }  `}
        onSubmit={submitSearch}
      >
        <div className={`flex relative `}>
          <label
            htmlFor="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Genre
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={handleToggleGenre}
          >
            Genre
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`z-10  ${
              !showDropdownGenre && "hidden "
            } left- absolute top-11 bg-white divide-y divide-gray-100 rounded-lg max-h-14 shadow overflow-y-auto scroll-smooth no-scrollbar `}
          >
            <ul>
              {uniqueGenres.map(
                (
                  name, // Limit the list to only 3 items using slice()
                ) => (
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full hover:bg-gray-100 text-left text-sm"
                      onClick={() => handleGenre(name as string)}
                    >
                      {name as string}
                    </button>
                    <hr />
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* PUBLICATION */}
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  "
            type="button"
            onClick={handleToggleYear}
          >
            Year
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdown"
            className={`z-10 ${
              !showDropdownYear && "hidden"
            }  absolute top-10 bg-white divide-y divide-gray-100 rounded-lg max-h-14 shadow overflow-y-auto scroll-smooth no-scrollba left-28  `}
          >
            <ul>
              {uniquePublicationYear.map((name) => (
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-2  hover:bg-gray-100 text-left text-sm"
                    onClick={() => handlePublicationYear(name as string)}
                  >
                    {name as string}
                  </button>
                  <hr />
                </li>
              ))}
            </ul>
          </div>

          {/* Search  */}

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search "
              required
              name="search"
              value={searchItem}
              onChange={handleSearch}
              onBlur={handleOnBlour}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-golden rounded-r-lg border border-blue-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
