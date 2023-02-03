import { useState } from "react";
// import { getBooks } from "../../src/services/books";
import styles from "./SearchForm.module.scss";

const SearchForm = ({ setBooks, getBooks }) => {
  const [path, setPath] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setPath(value);
  };

  const handleSubmit = async (event) => {
    // Api call and promises go here
    event.preventDefault();
    // console.log(`your search is for: ${path}`);
    await getBooks(path);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          className={styles.SearchForm_input}
          type="text"
          name="search"
          placeholder="Type in book info"
          onChange={handleChange}
        />
        <input
          className={styles.SearchForm_button}
          type="submit"
          value="Find"
        />
      </form>
    </div>
  );
};

export default SearchForm;
