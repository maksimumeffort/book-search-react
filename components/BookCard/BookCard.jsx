import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  // Each book in the grid should have an image, author, title and description

  const textSnippetArray = book.searchInfo?.textSnippet.split(" ");

  const cleanTextSnippetArray = [];

  textSnippetArray.forEach((el) => {
    if (el.includes("&#39;")) {
      // const codePattern = /&\S+;/;
      // const stringPattern = /(\d+|\w+)/;
      const cleanString = el.replace("&#39;", String.fromCharCode(39));
      cleanTextSnippetArray.push(cleanString);
    } else if (el.includes("&quot;")) {
      console.log(el);
      const cleanString = el.replace("&quot;", '"');
      cleanTextSnippetArray.push(cleanString);
    } else {
      cleanTextSnippetArray.push(el);
    }
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
