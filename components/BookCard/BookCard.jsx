import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  // Each book in the grid should have an image, author, title and description

  const checkForImage = () => {
    const imageLink = book.volumeInfo.imageLinks.smallThumbnail;
    return imageLink ? imageLink : "";
  };

  return (
    <div className={styles.BookCard}>
      <h3>{book.volumeInfo.title}</h3>
      <img
        src={checkForImage()}
        alt="book cover"
        className={styles.BookCard_Img}
      />
      <h4>{book.volumeInfo.authors}</h4>
      <p>{book.searchInfo.textSnippet}</p>
    </div>
  );
};

export default BookCard;
