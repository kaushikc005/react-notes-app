import { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Note,
  EditNote,
  CreateNote,
  Welcome,
  Protected,
} from "./components/index";
import { onSnapshot } from "firebase/firestore";
import { notesCollectionRef, db } from "./components/utils/firebase";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, function (snapshot) {
      const notesArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notesArr);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route
            path="/account"
            element={
              <Protected>
                <Note notes={notes} />
              </Protected>
            }
          />
          <Route
            path="account/create-note/"
            element={
              <Protected>
                <CreateNote
                  notes={notes}
                  setNotes={setNotes}
                  notesCollectionRef={notesCollectionRef}
                />
              </Protected>
            }
          />
          <Route
            path="account/edit-note/:id"
            element={
              <Protected>
                <EditNote notes={notes} setNotes={setNotes} />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
