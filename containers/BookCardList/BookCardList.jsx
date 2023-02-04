import styles from "./BookCardList.module.scss";

import BookCard from "../../components/BookCard/BookCard";

const BookCardList = ({ books }) => {
  // const books = [1, 2, 3, 4, 5];
  // console.log(books);
  return (
    <div>
      <div className={styles.BookCardList}>
        {books.map((book, index) => {
          return <BookCard key={index} book={book} />;
        })}
      </div>
    </div>
  );
};

export default BookCardList;
