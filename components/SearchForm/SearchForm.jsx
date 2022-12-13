const SearchForm = () => {
    const getBooks = async () => {
      
  };

  const handleSubmit = () => {
    // Api call and promises go here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type in book info" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchForm;
