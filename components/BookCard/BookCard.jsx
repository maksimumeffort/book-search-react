import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  // Each book in the grid should have an image, author, title and description

  const textSnippetArray = book.searchInfo?.textSnippet.split(" ");

  const cleanTextSnippetArray = [];

  textSnippetArray.forEach((el) => {
    // if (el.includes("&#")) {
    //   const codePattern = /&(\D\d+;|\S\w+;)/;
    //   const numberPattern = /\d+/;
    //   const codeExtract = codePattern.exec(el)[0];
    //   const numberInCode = numberPattern.exec(codeExtract)[0];

    //   const newEl = el.replace(codeExtract, String.fromCharCode(numberInCode));
    //   cleanTextSnippetArray.push(newEl);
    // } else {
    cleanTextSnippetArray.push(el);
    // }
  });

  const cleanTextSnippet = cleanTextSnippetArray.join(" ");

  const checkForImage = () => {
    const imageLink = book.volumeInfo.imageLinks.smallThumbnail;
    return imageLink ? imageLink : "";
  };

  return (
    <div className={styles.BookCard}>
      <section>
        <h3 className={styles.BookCard_title}>{book.volumeInfo.title}</h3>
        <h4 className={styles.BookCard_author}>{book.volumeInfo.authors}</h4>
      </section>

      <img
        src={checkForImage()}
        alt="book cover"
        className={styles.BookCard_image}
      />
      <section className={styles.BookCard_bottomSection}>
        <p className={styles.BookCard_description}>
          {cleanTextSnippet ?? "no description available"}
        </p>
      </section>
    </div>
  );
};

export default BookCard;
