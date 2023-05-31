import {React,useEffect,useState} from 'react'
import {useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import {GiNotebook} from 'react-icons/gi'
import './Welcome.css'

const Welcome = ({notes}) => {

  const {googleSignIn,user}=UserAuth()
  const navigate=useNavigate()

  const handleSignIn=async()=>{
    try{
         await googleSignIn()
    }
    catch(e){
      console.log(e)
    }
  }
  console.log(user)
  useEffect(()=>{
    if(user!=null){
        navigate('/account')
    }
  },[user])
 
  return (
     <main className='welcome--container'>
         <section className='welcome--header'>
         <span className='welcome--heading'>
          Welcome to the Notes App
         </span>
          <span className='welcome--subHeading'>
           Whatever's on your mind,<br/>
           Jot it down here
          </span>
          <GiNotebook className='notesIcon'/>
           <GoogleButton 
           className='signInBtn'
           onClick={handleSignIn} /> 
         </section> 
     </main>
  )
}

export default Welcome