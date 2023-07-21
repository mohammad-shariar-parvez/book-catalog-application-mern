/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useState, useEffect } from "react";
import { useAddBookMutation } from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";
import Input from "../atoms/Input";
import { useNavigate } from "react-router-dom";
import Toast from "../atoms/Toaster";
import Header from "../Header";

interface FormValues {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
}

const initialFormValues: FormValues = {
  title: "",
  author: "",
  genre: "",
  publicationDate: "",
  image: "",
};

const AddBook = () => {
  const [addBook, { data: book, isError, isSuccess }] = useAddBookMutation();
  const { user } = useAppSelector((state) => state.auth);

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess && book?.data) {
      navigate("/");
    }
  }, [navigate, isSuccess, book?.data]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const validationErrors: Partial<FormValues> = {};

    // Perform custom validation
    if (formValues.title.trim() === "") {
      validationErrors.title = "Title is required";
    }
    if (formValues.author.trim() === "") {
      validationErrors.author = "author is required";
    }
    if (formValues.genre.trim() === "") {
      validationErrors.genre = "genre is required";
    }
    if (formValues.publicationDate.trim() === "") {
      validationErrors.publicationDate = "publicationDate is required";
    }
    if (formValues.image.trim() === "") {
      validationErrors.image = "image is required";
    }

    void addBook({
      title: formValues.title,
      author: formValues.author,
      genre: formValues.genre,
      publicationDate: formValues.publicationDate,
      image: formValues.image,
      userId: user?.id,
    });

    // Reset form fields to initial values
    setFormValues(initialFormValues);
  };
  const handleReset = () => {
    setFormValues(initialFormValues);
    setErrors({});
  };
  return (
    <>
      <Header />
      {isSuccess && (
        <Toast message={"Book Added Successfully"} color={"green"} />
      )}
      {isError && <Toast message={"Could not Add book"} color={"red"}></Toast>}
      <form
        onSubmit={handleSubmit}
        className="max-w-xs mx-auto py-28 md:py-10 "
      >
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Input
              label="Title:"
              name="title"
              type="text"
              value={formValues.title}
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
              value={formValues.author}
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
            value={formValues.genre}
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
            value={formValues.publicationDate}
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
            value={formValues.image}
            error={errors.image}
            required
            onChange={handleChange}
          />
        </div>

        <div className="gap-x-6 space-x-6 flex  ">
          <button
            type="submit"
            className="text-white bg-golden hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center "
          >
            Add book
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center  "
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
