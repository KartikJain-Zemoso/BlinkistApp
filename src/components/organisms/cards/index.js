import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";

const Cards = (props) => {
  console.log("In Card" + props.index);

  return (
    <>
      <div className="col-md-3">
        <div className="card card-wrapper">
          <Link to={`/books/${props.book.id}`}>
            <img className="card-img-top" src={props.book.url} alt="Card cap" />
          </Link>
          <div className="card-body ">
            <h5 className="card-title">{props.book.name}</h5>
            <p className="card-text ">{props.book.author}</p>
            <p className="card-text ">
              {<AccessTimeIcon />}
              {props.book.duration}
            </p>
            <div className="row">
              <div className="col-md-12 p0">
                {props.index > -1 ? (
                  <>
                    {" "}
                    <span
                      className="moreHoriz"
                      onClick={() => props.finishBook(props.book)}
                    >
                      <MoreHorizIcon />
                    </span>
                    <br />
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="20"
                        aria-valuemin=""
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </>
                ) : (
                  <button
                    className="addToLibrary"
                    onClick={() => {
                      props.click(props.book);
                    }}
                  >
                    {<AddIcon />} Add to Library
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
