import styles from "./BookCardList.module.scss";

import BookCard from "../../components/BookCard/BookCard";

const BookCardList = () => {
  const books = [1, 2, 3, 4, 5];
  return (
    <div className={styles.BookCardList}>
      {books.map((book) => {
        return <BookCard />;
      })}
    </div>
  );
};

export default BookCardList;
