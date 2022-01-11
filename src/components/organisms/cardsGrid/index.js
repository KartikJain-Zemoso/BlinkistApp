import React, { useEffect, useState } from "react";
import Cards from "../cards";
const CardGrid = (props) => {
  const [books, setBooks] = useState([]);
  const [library, setLibrary] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBooks(data);
      });

    fetch("http://localhost:8000/library")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLibrary(data);
      });
  }, []);
  const addToLibrary = (book) => {
    let new_book = book;
    new_book.isFinished = false;

    console.log(new_book);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: book.id,
        author: book.author,
        category: book.category,
        duration: book.duration,
        name: book.name,
        url: book.url,
        isFinished: false,
      }),
    };
    fetch("http://localhost:8000/library", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setLibrary([...library, data]);
      });
  };

  const finishBook = (book) => {
    console.log(book);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: book.id,
        author: book.author,
        category: book.category,
        duration: book.duration,
        name: book.name,
        url: book.url,
        isFinished: true,
      }),
    };
    fetch(`http://localhost:8000/library/${book.id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="row">
      {books.map((book) => {
        let indexOfBook = -1;
        indexOfBook = library.map((e) => e.id).indexOf(book.id);

        return (
          <Cards
            book={book}
            index={indexOfBook}
            click={() => addToLibrary(book)}
            finishBook={finishBook}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
