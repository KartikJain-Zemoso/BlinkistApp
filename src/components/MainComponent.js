import React from "react";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./organisms/bookDetail";
import CardGrid from "./organisms/cardsGrid";
import Library from "./organisms/library";

import Navigation from "./organisms/Navigation";
const MainComponent = (props) => {
  const finishBook = (book) => {
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
        window.location.reload();
      });
  };
  return (
    <>
      <div className="header-container">
        <Navigation />
      </div>
      <div className="header-container">
        <Routes>
          <Route exact path="/" element={<Library />} />
          <Route path="/library" element={<Library />} />
          <Route
            path="/books/:id"
            element={
              <BookDetail finishBook={finishBook} addToLibrary={addToLibrary} />
            }
          />
          <Route path="/category/enterpreneurship" element={<CardGrid />} />
        </Routes>
      </div>
    </>
  );
};

export default MainComponent;
