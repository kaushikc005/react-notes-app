import React, { useEffect ,useState } from 'react'
import {BiSearch,BiPlus} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import dateFormat, { masks } from "dateformat";
import './Card.css'

const Card = ({notes}) => {

    const randomBGColor=()=>{
    const x=Math.floor(Math.random()*256)
    const y=Math.floor(Math.random()*256)
    const z=Math.floor(Math.random()*256) 
    const bg_color=`rgb(${x},${y},${z})`;
    const brightness = Math.round(((parseInt(x) * 299) +
                      (parseInt(y) * 587) +
                      (parseInt(z) * 114)) / 1000);
   const text_color = (brightness > 125) ? 'black' : 'white';
    return [bg_color,text_color]
  }

  const sortedNotes=notes.sort((a,b)=>{
    return new Date(b.dateModified.seconds) - new Date(a.dateModified.seconds);
})

  return(
      <main className='card--container'>
        {notes.length>0?
            notes.map((note,key)=> (  
                <Link to={`edit-note/${note.id}`} key={key} className='card--link'>
                <section className='card' id={note.id} 
                 style={{backgroundColor:randomBGColor()[0],color:randomBGColor()[1]}}
                >
                <span className='card--title-display'>{note.title.length>30 ?note.title.slice(0,30):note.title}</span> <br />
                <div className='card--details-display'>
                {note.details.length>50 ?note.details.slice(0,50):note.details}
                </div>
                  <div className='card--date-display'> 
                  {dateFormat(note.dateModified.toDate(), "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                 </div>
                </section>
                </Link> 
            ))
            :<span className='empty--notes'>
              No notes found
            </span>
       }
              
       </main> 
    
  )
}

export default Card