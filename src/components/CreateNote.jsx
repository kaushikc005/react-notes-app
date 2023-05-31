import {React,useState} from 'react';
import { v4 as uuid } from 'uuid';
import {MdArrowBackIosNew} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import './CreateNote.css'
import { useNoteDate } from './hooks/useNoteDate';
import { addDoc,Timestamp } from 'firebase/firestore';

const CreateNote = ({notes,setNotes,notesCollectionRef}) => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('');
   //  const date=useNoteDate()
    const navigate=useNavigate();
   
    const handleSubmit=async ()=> {
    
        if(title && details)
        {
          const newNote={title,details,dateCreated:Timestamp.fromDate(new Date()),
            dateModified:Timestamp.fromDate(new Date())};
          await addDoc(notesCollectionRef,newNote)
        }
    }
  return (
    <section>
    <header>
       <Link to='/'>
          <MdArrowBackIosNew className='createNote--btn'/>
       </Link>
       
       {title && details && <Link to='/' className='save-btn' onClick={handleSubmit}>Save</Link>}
    </header>
       <form onSubmit={handleSubmit}>
          <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' className='card--title'/>
          <textarea type='text' rows={30} value={details} onChange={(e)=>setDetails(e.target.value)}  placeholder='Enter your not here...' className='card--details'/>
       </form>
    </section>
  )
}

export default CreateNote