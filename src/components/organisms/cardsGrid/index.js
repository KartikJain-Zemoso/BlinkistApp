import React, { useEffect, useState } from "react";
import Cards from "../cards";
const CardGrid = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  return (
    <div className="row">
      {books.map((book) => {
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
