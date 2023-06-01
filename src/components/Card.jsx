import React, { useEffect, useState } from "react";
import { BiSearch, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import dateFormat, { masks } from "dateformat";
import "./Card.css";
import { randomBGColor } from "./utils/randomColors";

const Card = ({ notes }) => {
  
  const sortedNotes = notes.sort((a, b) => {
    return new Date(b.dateModified.seconds) - new Date(a.dateModified.seconds);
  });

  return (
    <article className="card--container">
      {notes.length > 0 ? (
        notes.map((note, key) => (
          <Link to={`edit-note/${note.id}`} key={key} className="card--link">
            <section
              className="card"
              id={note.id}
              style={{
                backgroundColor: randomBGColor()[0],
                color: randomBGColor()[1],
              }}
            >
              <summary>
                <p className="card--title-display">
                  {note.title.length > 30
                    ? note.title.slice(0, 30)
                    : note.title}
                </p>{" "}
                <br />
                <p className="card--details-display">
                  {note.details.length > 50
                    ? note.details.slice(0, 50)
                    : note.details}
                </p>
                <br />
                <p className="card--date-display">
                  {dateFormat(
                    note.dateModified.toDate(),
                    "dddd, mmmm dS, yyyy, h:MM:ss TT"
                  )}
                </p>
              </summary>
            </section>
          </Link>
        ))
      ) : (
        <section className="empty--notes">No notes found</section>
      )}
    </article>
  );
};

export default Card;
