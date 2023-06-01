import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { GiNotebook } from "react-icons/gi";
import "./Welcome.css";

const Welcome = ({ notes }) => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };
  console.log(user);
  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <article className="welcome--container">
      <section className="welcome--header">
        <h1 className="welcome--heading">Welcome to the Notes App</h1>
        <h2 className="welcome--subHeading">
          Whatever's on your mind,
          <br />
          Jot it down here
        </h2>
        <h3>
          <GiNotebook className="notesIcon" />
          <GoogleButton className="signInBtn" onClick={handleSignIn} />
        </h3>
      </section>
    </article>
  );
};

export default Welcome;
