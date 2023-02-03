import { useState } from "react";
// import { getBooks } from "../../src/services/books";

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Type in book info"
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchForm;
