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
      <div className='food'>
        <div className="foodcon">
     <h1 className='home-heading'>Search The Recipie of your Favourite meal  </h1>
     <button className='home-btn mx-5 my-4' onClick={handleClick}>Get Started<i className="bi bi-arrow-right"></i></button></div>
     <img className='home-image img-fluid' src="https://img.freepik.com/premium-photo/national-food-india-with-white-background-high-q_889056-6602.jpg" alt="" />
 
          </div>
    <div className="food my-4">
      <img className="home-image img-fluid"  src={dosa} alt="" />
      <h1 className='home-heading'>Join us on a culinary journey where every recipe tells a unique story </h1>
    
        </div>
    </div>
     </>
  )
}

export default Home
