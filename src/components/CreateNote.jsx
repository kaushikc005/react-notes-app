import {React,useState} from 'react';
import { v4 as uuid } from 'uuid';
import {MdArrowBackIosNew} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import './CreateNote.css'
import { useNoteDate } from './hooks/useNoteDate';

const CreateNote = ({notes,setNotes}) => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('');
    const date=useNoteDate()
    const navigate=useNavigate();
    console.log(date)
    const handleSubmit=()=> {

        if(title && details)
        {
          const id=uuid();
          
          const newNote={id,title,details,date};
          const newNotes=[newNote,...notes];
          setNotes(newNotes);

          
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