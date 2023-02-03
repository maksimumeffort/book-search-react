import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  // Each book in the grid should have an image, author, title and description

  const textSnippetArray = book.searchInfo?.textSnippet.split(" ");

  const cleanTextSnippetArray = [];

  textSnippetArray.forEach((el) => {
    if (el.includes("&#")) {
      const codePattern = /&(\D\d+;|\S\w+;)/;
      const numberPattern = /\d+/;
      const codeExtract = codePattern.exec(el)[0];
      const numberInCode = numberPattern.exec(codeExtract)[0];

      const newEl = el.replace(codeExtract, String.fromCharCode(numberInCode));
      cleanTextSnippetArray.push(newEl);
    } else {
      cleanTextSnippetArray.push(el);
    }
  });

  const cleanTextSnippet = cleanTextSnippetArray.join(" ");

  // console.log(cleanTextSnippet);

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
      <p>{cleanTextSnippet ?? "no description available"}</p>
    </div>
  );
};

export default BookCard;
