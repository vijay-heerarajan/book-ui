import useFetch from "./useFetch";

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://book-apis-blond.vercel.app/books/author/${author}`
  );

  console.log(data);

  return data ? (
    <div>
      <h2>Books by {author}</h2>
      <ul>
        {data && data.length > 0 && data.map((book) => <li>{book.title}</li>)}
      </ul>
    </div>
  ) : (
    loading && <p>Loading ...</p>
  );
};
export default BookByAuthor;
