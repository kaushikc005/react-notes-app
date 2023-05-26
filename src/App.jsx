import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Note, EditNote, CreateNote } from './components/index'
import { useNoteDate } from './components/hooks/useNoteDate'


function App() {
  const [count, setCount] = useState(0)
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(()=>{
   localStorage.setItem('notes',JSON.stringify(notes));
  },[notes])
  console.log(notes)
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Note notes={notes}/>} />
            <Route path='/create-note/' element={<CreateNote notes={notes} setNotes={setNotes} />} />
            <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes}/>} />
          </Routes>
    </Router>
    
  )
}


export default App
