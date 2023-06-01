import { React, useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditNote.css";
import { deleteDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./utils/firebase";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const navigate = useNavigate();
  const [title, setTitle] = useState(note ? note.title : []);
  const [details, setDetails] = useState(note ? note.details : []);
  const [delNote, setDelNote] = useState(false);

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
    if (title && details) {
      const docRef = doc(db, "notes", id);
      await deleteDoc(docRef);
      navigate("/");
    }
  };

  return (
    <>
      <article className="editNote--container">
        <header className="edit--navBar-Header">
          <nav className="editBtns">
            <Link to="/">
              <MdArrowBackIosNew className="edit--note-btn" />
            </Link>

            {title && details && (
              <Link
                to="/"
                className="edit--note-save-btn"
                onClick={handleSubmit}
              >
                Save
              </Link>
            )}
            <RiDeleteBin6Line
              className="delete-btn"
              onClick={() => {
                setDelNote(true);
              }}
            />
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

      <aside>
        <section
          className="container"
          style={{ display: delNote ? "flex" : "none" }}
        >
          <h3 className="confirmation-text">
            Do you really want to delete this note?
          </h3>
          <nav className="button-container">
            <button className="confirmation-button" onClick={handleDelete}>
              Delete
            </button>
            <button className="cancel-button" onClick={() => setDelNote(false)}>
              Cancel
            </button>
          </nav>
        </section>
        <section
          className="confirm-bg"
          style={{ display: delNote ? "flex" : "none" }}
        ></section>
      </aside>
    </>
  );
};

export default EditNote;
