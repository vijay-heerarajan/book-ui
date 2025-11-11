import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import AllBooks from "./AllBooks";
import BookByTitle from "./BookByTitle";
import BookByAuthor from "./BookByAuthor";
import AddBookForm from "./AddBookForm";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <AddBookForm />
      <AllBooks />
      <BookByTitle title="The Great Gatsby" />
      <BookByAuthor author="Harper Lee" />
    </>
  );
}

export default App;
