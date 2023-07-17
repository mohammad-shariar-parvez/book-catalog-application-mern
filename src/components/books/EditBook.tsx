/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";
import { useState } from "react";
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";
import Input from "../atoms/Input";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../atoms/Toaster";

interface FormValues {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
}

const EditBook = () => {
  const { id } = useParams();
  const { data: book } = useGetSingleBookQuery(id);
  const { user } = useAppSelector((state) => state.auth);
  const [editBook, { data: editedbook, isSuccess: editedbookSuccess }] =
    useEditBookMutation();

  const [formValues, setFormValues] = useState<Partial<FormValues>>(book?.data);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showToast, setShowToast] = useState(false);

  console.log("edited books", editedbook);
  console.log("Book Success", editedbookSuccess);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (editedbookSuccess && editedbook?.data) {
      setShowToast(true);
      const timer = setTimeout(() => {
        navigate("/");
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [navigate, editedbookSuccess, editedbook?.data]);
  // console.log("ussse state", editedbookSuccess);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const validationErrors: Partial<FormValues> = {};

    // Perform custom validation
    if (formValues?.title?.trim() === "") {
      validationErrors.title = "Title is required";
    }
    if (formValues.author?.trim() === "") {
      validationErrors.author = "author is required";
    }
    if (formValues.genre?.trim() === "") {
      validationErrors.genre = "genre is required";
    }
    if (formValues.publicationDate?.trim() === "") {
      validationErrors.publicationDate = "publicationDate is required";
    }
    if (formValues.image?.trim() === "") {
      validationErrors.image = "image is required";
    }

    void editBook({
      id: id,
      data: {
        title: formValues.title,
        author: formValues.author,
        genre: formValues.genre,
        publicationDate: formValues.publicationDate,
        image: formValues.image,
        userId: user?.id,
      },
    });
    console.log("ussse state", formValues);

    // Reset form fields to initial values
    setFormValues(formValues);
  };
  const handleReset = () => {
    setFormValues(book?.data);
    setErrors({});
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto py-10">
        {showToast && <Toast message={"Book Added Successfully"} />}
        {/* {isError && <ErrorMessage message="Could not Update book"></ErrorMessage>} */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Input
              label="Title:"
              name="title"
              type="text"
              value={formValues.title!}
              error={errors.title}
              required
              onChange={handleChange}
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Input
              label="Author:"
              name="author"
              type="text"
              value={formValues.author!}
              error={errors.author}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Input
            label="Grnre:"
            name="genre"
            type="text"
            value={formValues.genre!}
            error={errors.genre}
            required
            onChange={handleChange}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <Input
            label="PublicationDate:"
            name="publicationDate"
            type="date"
            value={formValues.publicationDate!}
            error={errors.publicationDate}
            required
            onChange={handleChange}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <Input
            label="Image:"
            name="image"
            type="text"
            value={formValues.image!}
            error={errors.image}
            required
            onChange={handleChange}
          />
        </div>

        <div className="gap-x-6 space-x-6">
          <button
            type="submit"
            className="text-white bg-golden hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  "
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default EditBook;
