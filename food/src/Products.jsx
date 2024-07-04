import React, { useState, useEffect } from 'react';
import plateImage from './plate.jpg';
import ProductItem from './ProductItem';

function Products() {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://indoflavours.vercel.app/api/fetchdata/getfood/`);
        const data = await response.json();
        setMeal(data);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array to fetch data only once

  return (
    <>
    
      <img className='center putinplate' src="https://cdn-icons-png.flaticon.com/128/1037/1037762.png" alt="" />
      <div className='container2'>
        <h1 className='product-heading'>Wanna try something new??</h1>
        <h1 className='product-heading'>Here are Our Top Recipes</h1>
      </div>
      <img className="center" src={plateImage} height={200} width={200} alt="" />
      <div>
        <h1 className='product-heading'>Our Top Recipes</h1>
        <div className='product-container'>
          {meal.map((product) => (
           <ProductItem key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
