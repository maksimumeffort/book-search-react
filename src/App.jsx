import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";
import SearchForm from "../components/SearchForm";
import BookCardList from "../containers/BookCardList/BookCardList";

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className={styles.App}>
      <h2>Book Search</h2>
      <SearchForm />
      <BookCardList />
    </div>
  );
}

export default App;
