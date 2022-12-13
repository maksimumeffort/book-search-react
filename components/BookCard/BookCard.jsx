import styles from "./BookCard.module.scss";

const BookCard = () => {
  // Each book in the grid should have an image, author, title and description
  return (
    <div className={styles.BookCard}>
      <h3>Title</h3>
      <img src="" alt="book cover" className={styles.BookCard_Img} />
      <h4>Author</h4>
      <p>Description</p>
    </div>
  );
};

export default BookCard;
