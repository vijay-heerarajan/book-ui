import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "releaseYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(formData);

      if (!response.ok) {
        throw "Failed to add movie.";
      }

      const data = await response.json();

      console.log("Book added Successfully", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" name="title" onChange={handleChange} /> <br /> <br />
        <label htmlFor="author">Author:</label>
        <br />
        <input type="text" name="author" onChange={handleChange} /> <br />
        <br />
        <label htmlFor="publishedYear">Published Year:</label>
        <br />
        <input type="text" name="publishedYear" onChange={handleChange} />{" "}
        <br /> <br />
        <label htmlFor="genre">Genre:</label>
        <br />
        <input type="text" name="genre" onChange={handleChange} /> <br /> <br />
        <label htmlFor="language">Language:</label>
        <br />
        <input
          type="text"
          name="language"
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="country">Country:</label>
        <br />
        <input type="text" name="country" onChange={handleChange} /> <br />{" "}
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input type="text" name="rating" onChange={handleChange} /> <br />{" "}
        <br />
        <label htmlFor="summary">Summary:</label>
        <br />
        <input type="text" name="summary" onChange={handleChange} /> <br />{" "}
        <br />
        <label htmlFor="coverImageUrl">Cover Image Url:</label>
        <br />
        <input type="text" name="coverImageUrl" onChange={handleChange} />{" "}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddBookForm;
