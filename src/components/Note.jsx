import {React,useEffect,useState} from 'react'
import dummy from '../assets/dummy_notes';
import {BiSearch,BiPlus} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Notes.css'
import Card from './Card';
const Note = ({notes}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState('')
    const [filteredNotes,setFilteredNotes]=useState(notes);
    const handleClick=()=> {
          setShowSearch(prev=>!prev);
    }

    const handleSearch=() => {
      const newNotes=notes.filter((item) => item.title.toLowerCase().match(searchText.toLowerCase()) || item.details.toLowerCase().match(searchText.toLowerCase()))
      setFilteredNotes(newNotes);
    }
    useEffect(handleSearch,[searchText]);

  return (
    
    <div className='note--container'>
     <section >
         <header className='notes--header'>
            {!showSearch && <p className='notes--heading'>My Notes</p>}
            {showSearch && <input type='text' placeholder='Keyword...' className='notes--input' value={searchText} onChange={(event)=> {
                
             setSearchText(event.target.value);
             handleSearch();
             } }/>}
            <BiSearch className='btn' onClick={handleClick}/>
         </header>
         <main>
         
           <Card notes={filteredNotes}/> 
        
         </main> 
         <Link to='/create-note'>
            <BiPlus className='btn-plus'/>
            </Link> 
     </section>
    
    </div>
  )
}

export default Note