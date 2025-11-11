import useFetch from "./useFetch";

const BookByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://book-apis-blond.vercel.app/books/${title}`
  );

  console.log(data);

  return data ? (
    <div>
      <h2>{data.title}</h2>
      <p>Author: {data.author}</p>
      <p>Release Year: {data.publishedYear}</p>
      <p>Genres: {data.genres?.join(", ")}</p>
    </div>
  ) : (
    loading && <p>Loading ...</p>
  );
};
export default BookByTitle;
