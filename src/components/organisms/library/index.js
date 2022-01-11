import React, { useEffect, useState } from "react";
import Cards from "../cards";

import "./library.css";
const Library = (props) => {
  const [currentTab, toggleTab] = useState("current");
  const [library, setLibrary] = useState([]);
  const currentBooks = library.filter((book) => book.isFinished === false);
  const finishedBooks = library.filter((book) => book.isFinished === true);
  let currentBookMap = "No Books Available";
  let finishedBooksMap = "No Books Available";
  if (currentBooks.length > 0) {
    currentBookMap = currentBooks.map((book) => {
      let indexOfBook = -1;
      indexOfBook = library.map((e) => e.id).indexOf(book.id);
      return <Cards book={book} index={indexOfBook} />;
    });
  }
  if (finishedBooks.length > 0) {
    finishedBooksMap = finishedBooks.map((book) => {
      let indexOfBook = -1;
      indexOfBook = library.map((e) => e.id).indexOf(book.id);
      return <Cards book={book} index={indexOfBook} />;
    });
  }
  console.log(currentBooks);
  console.log(finishedBooks);
  useEffect(() => {
    fetch("http://localhost:8000/library")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLibrary(data);
      });
  }, []);
  return (
    <>
      <h1>My Library</h1>
      <div className="row reading-tab">
        <div className="col-md-3 library-wrapper">
          <div
            className={
              currentTab == "current" ? "reading reading-active" : "reading"
            }
            onClick={() => toggleTab("current")}
          >
            Currently Reading
          </div>
        </div>
        <div className="col-md-3 library-wrapper">
          <div
            className={
              currentTab == "finished" ? "reading reading-active" : "reading"
            }
            onClick={() => toggleTab("finished")}
          >
            Finished
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 "></div>
        {currentTab == "current" ? currentBookMap : finishedBooksMap}
      </div>
    </>
  );
};

export default Library;
