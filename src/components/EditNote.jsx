import { React, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { Link, useParams } from "react-router-dom";
import "./EditNote.css";
import { deleteDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./utils/firebase";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  console.log(note);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const handleSubmit = async () => {
    if (title && details) {
      const newNote = {
        title,
        details,
        dateModified: Timestamp.fromDate(new Date()),
      };
      const docRef = doc(db, "notes", id);
      await setDoc(docRef, newNote, { merge: true });
    }
  };

  const handleDelete = async () => {
    console.log(id);
    if (title && details) {
      const docRef = doc(db, "notes", id);
      await deleteDoc(docRef);
    }
  };
  return (
    <article className="editNote--container">
      <header className="edit--navBar-Header">
        <nav className="editBtns">
          <Link to="/">
            <MdArrowBackIosNew className="edit--note-btn" />
          </Link>

          {title && details && (
            <Link to="/" className="edit--note-save-btn" onClick={handleSubmit}>
              Save
            </Link>
          )}
          <Link to="/" className="delete-btn" onClick={handleDelete}>
            <RiDeleteBin6Line />
          </Link>
        </nav>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="edit--note-card--title"
        />
        <textarea
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Enter your note.."
          className="edit--note-card--details"
        />
      </form>
    </article>
  );
};

export default EditNote;
