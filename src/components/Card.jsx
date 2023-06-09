import React, { useEffect, useState } from "react";
import { BiSearch, BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ notes }) => {
  console.log(notes);
  const [color, setColor] = useState("");
  const randomBG = (id) => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bg_color = `rgb(${x},${y},${z})`;
    const brightness = Math.round(
      (parseInt(x) * 299 + parseInt(y) * 587 + parseInt(z) * 114) / 1000
    );
    const text_color = brightness > 125 ? "black" : "white";
    document.getElementById(id).style.background = bg_color;
    document.getElementById(id).style.color = text_color;
  };

  return (
    <article className="card--container">
      {notes.length > 0 ? (
        notes.map((note, key) => (
          <Link to={`/edit-note/${note.id}`} key={key} className="card--link">
            <main
              className="card"
              id={note.id}
              onLoad={useEffect(() => {
                randomBG(note.id);
              }, [])}
            >
              <span className="card--title-display">
                {note.title.length > 30 ? note.title.slice(0, 30) : note.title}
              </span>{" "}
              <br />
              <section className="card--details-display">
                {note.details.length > 50
                  ? note.details.slice(0, 50)
                  : note.details}
              </section>
              <section className="card--date-display">{note.date}</section>
            </main>
          </Link>
        ))
      ) : (
        <span className="empty--notes">No notes found</span>
      )}
    </article>
  );
};

export default Card;
