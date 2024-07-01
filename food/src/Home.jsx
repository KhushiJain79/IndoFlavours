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
      <div className='con'>
     <img className='home-image img-fluid' src="https://img.freepik.com/premium-photo/national-food-india-with-white-background-high-q_889056-6602.jpg" alt="" />
     <h1 className='home-heading'>Search The Recipie of your Favourite meal </h1>
 
     <button className='home-btn' onClick={handleClick}>Get Started<i className="bi bi-arrow-right"></i></button>
     </div>
    <div className="food my-4">
      <img className="home-image img-fluid addon"  src={dosa} alt="" />
      <h1 className='home-heading addon'>Join us on a culinary journey where every recipe tells a unique story </h1>
    
        </div>
    </div>
     </>
  )
}

export default Home
