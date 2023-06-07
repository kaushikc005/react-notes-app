import { React, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/Ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditNote.css";
import { useNoteDate } from "./hooks/useNoteDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  console.log(note);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useNoteDate();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // event.preventDefault();
    if (title && details) {
      const newNote = { id, title, details, date };
      const newNotes = notes.filter((item) => item.id != id);
      setNotes([newNote, ...newNotes]);
    }
    // navigate('/');
  };

  const handleDelete = () => {
    if (title && details) {
      const newNote = { id, title, details, date };
      const newNotes = notes.filter((item) => item.id != id);
      setNotes([...newNotes]);
    }
  };
  return (
    <article>
      <header>
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
