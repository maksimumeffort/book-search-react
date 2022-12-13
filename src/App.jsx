import { useEffect, useState } from "react";
// import { getBooks } from "../src/services/books";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";
import SearchForm from "../components/SearchForm";
import BookCardList from "../containers/BookCardList/BookCardList";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async (query) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCz0vKW3Lm6niYdwIayK8g7xwe0HwulF6I`
    );
    // console.log(promise);
    // const response = promise.then((res) => console.log(res));
    const data = await response.json();
    // const finalData = await response.items;

    console.log(data.items);

    setBooks(data.items);
  };

  useEffect(() => {
    // const wrapper = async () => {
    //   const allBooks = await getBooks();
    //   getBooks();
    // };
    // wrapper();
  });

  return (
    <div className={styles.App}>
      <h2>Book Search</h2>
      <SearchForm setBooks={setBooks} getBooks={getBooks} />
      <BookCardList books={books} />
    </div>
  );
}

export default App;
