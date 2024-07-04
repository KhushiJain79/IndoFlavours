import React  from 'react'
import {useNavigate} from 'react-router-dom'
import dosa from './dosa.jpeg'

function Home() {
    
    const location=useNavigate();
    const handleClick=()=>{
    location('/products')
    };
  return (
    <>
    <div className='home-bg'>
     
      
     <h1 className='home-heading'>Search The Recipie of your Favourite meal  </h1>
     <button className='btn mx-5 my-4' onClick={handleClick}>Get Started<i className="bi bi-arrow-right"></i></button></div>
     </>
  )
}

export default Home
