import React, { useEffect, useState } from "react";
import Cards from "../cards";
import axios from "axios";
const CardGrid = (props) => {
  const [books, setBooks] = useState([]);
  const retrieveBooks = async () => {
    const result = await axios.get("http://localhost:8000/books");
    console.log(result);
    return result.data;
  };
  useEffect(() => {
    const getData = async () => {
      let bookData = await retrieveBooks();
      setBooks(bookData);
    };
    getData();
  }, []);

  return (
    <div className="row">
      {books.length > 0 &&
        books.map((book) => {
          let indexOfBook = -1;
          indexOfBook = props.library.map((e) => e.id).indexOf(book.id);

          return (
            <Cards
              book={book}
              index={indexOfBook}
              click={() => props.addToLibrary(book)}
              finishBook={props.finishBook}
            />
          );
        })}
    </div>
  );
};

export default CardGrid;
