import React from 'react';
import './AboutPage.css'; // Import your CSS for styling
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const location=useNavigate();
  const handleClick=()=>{
  location('/products')
  };
  return (
    <>
   <div className='about-page'>

<div className="container1">
  <h1 className='about-head'>We Provide Delicious and Tasty Recipies<h6 className='my-2'>At IndoFlavours, we turn everyday ingredients into extraordinary meals, one recipe at a time.</h6></h1>
  
<img className="about-image" src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo="  alt="" />
<button className='about-btn' onClick={handleClick}>Try Now</button>

</div>
   </div>
<div className="footer my-4">
    <div className="box"><h2 className="subhead1">Our services include:</h2>
<p className="paraabout">
Our mission is to inspire and empower you to create delicious meals at home. We strive to provide you with a diverse collection of recipes that are easy to follow, nutritious, and bursting with flavor. Whether you're a beginner looking for simple recipes or an experienced cook seeking new challenges, you'll find something to suit your taste and skill level here
    </p>
    </div>
    <div className="box"><h2 className="subhead1">Why Choose Us</h2>
    <p className="paraabout">
        <ul>
            <li>Recipes</li>
            <li>Cooking Tips and Techniques</li>
           <li>Meal Planning</li>
            <li>Community</li>
        </ul>
        </p></div>
    <div className="box"><h2 className="subhead1">Our Team</h2>
<p className="paraabout">Meet the dedicated professionals behind MetersIndia:
<ul>
    <li> Henry Rich - CEO & Co-Founder</li>
    <li>Khushi Jain- Chief Technology Officer</li>
    <li> Muskan Sharma - Head of Customer Support</li>
    <li> Andrew Fedrik - Lead Data Analyst</li>
</ul>




</p></div>
  




</div>
   </>
  );
}

export default AboutPage;

