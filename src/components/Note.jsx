import {useEffect, useState } from "react";
import { BiSearch, BiPlus } from "react-icons/bi";
import { Link, useNavigate} from "react-router-dom";
import "./Notes.css";
import Card from "./Card";
import { UserAuth } from "../context/AuthContext";

const Note = ({ notes }) => {
  const { SignOut, user } = UserAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await SignOut();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);
  const handleClick = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearch = () => {
    const newNotes = notes.filter(
      (item) =>
        item.title.toLowerCase().match(searchText.toLowerCase()) ||
        item.details.toLowerCase().match(searchText.toLowerCase())
    );
    setFilteredNotes(newNotes);
  };
  useEffect(handleSearch, [searchText]);

  return (
    <main className="note--container">
      <header className="notes--header">
        {!showSearch && <p className="notes--heading">My Notes</p>}
        {showSearch && (
          <input
            type="text"
            placeholder="Keyword..."
            className="notes--input"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              handleSearch();
            }}
          />
        )}
        <nav className="navBtns" aria-label="primary-navigation">
          <BiSearch className="btn" onClick={handleClick} />
          <Link to="/">
            <button className="signOutBtn" onClick={handleSignOut}>
              Sign Out
            </button>
          </Link>
        </nav>
      </header>

      <section>
        <Card notes={showSearch ? filteredNotes : notes} />
      </section>

      <footer className="footerBtn">
        <BiPlus className="btn-plus" onClick={() => navigate("create-note")} />
      </footer>
    </main>
  );
};

export default Note;
