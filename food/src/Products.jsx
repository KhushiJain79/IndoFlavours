import React, { useState, useEffect } from 'react';
import plateImage from './plate.jpg';
import ProductItem from './ProductItem';

function Products() {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/fetchdata/getfood/`);
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
    {/* <ol className="flex space-x-6 w-full py-4">
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/quick-and-easy">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/Sesame-Butter-Noodles-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="" data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/Sesame-Butter-Noodles-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/Sesame-Butter-Noodles-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/Sesame-Butter-Noodles-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/Sesame-Butter-Noodles-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/Sesame-Butter-Noodles-96x96.jpg 96w, https://pinchofyum.com/wp-content/uploads/Sesame-Butter-Noodles-225x225.jpg 225w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Sesame-Butter-Noodles.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=640,height=640,fit=crop/wp-content/uploads/Sesame-Butter-Noodles.jpg 640w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/Sesame-Butter-Noodles.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=95176"/><p className="font-sans text-sm font-bold text-black leading-tight">Quick and Easy</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/dinner">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="White hand holding a ginger chicken meatball sandwich" data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-96x96.jpg 96w, https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-225x225.jpg 225w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/ginger-chicken-meatball-sandos-63.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=640,height=640,fit=crop/wp-content/uploads/ginger-chicken-meatball-sandos-63.jpg 640w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/ginger-chicken-meatball-sandos-63.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=88998"/><p className="font-sans text-sm font-bold text-black leading-tight">Dinner</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/vegetarian">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="" data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-96x96.jpg 96w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=640,height=640,fit=crop/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4.jpg 640w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=87136"/><p className="font-sans text-sm font-bold text-black leading-tight">Vegetarian</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/healthy-choices">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/cropped-Crunch-Roll-Bowls-2-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Crunch Roll Bowls-2" data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/cropped-Crunch-Roll-Bowls-2-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/cropped-Crunch-Roll-Bowls-2-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/cropped-Crunch-Roll-Bowls-2-96x96.jpg 96w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/cropped-Crunch-Roll-Bowls-2.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=640,height=640,fit=crop/wp-content/uploads/cropped-Crunch-Roll-Bowls-2.jpg 640w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/cropped-Crunch-Roll-Bowls-2.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=87436"/><p className="font-sans text-sm font-bold text-black leading-tight">Healthy</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/instant-pot">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Tacos with chicken tinga and onion." data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-96x96.jpg 96w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Chicken-Tinga-Tacos-5.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=640,height=640,fit=crop/wp-content/uploads/Chicken-Tinga-Tacos-5.jpg 640w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/Chicken-Tinga-Tacos-5.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=45542"/><p className="font-sans text-sm font-bold text-black leading-tight">Instant Pot</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/vegan">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="" data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-640x640.jpg 640w, https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-96x96.jpg 96w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=42850"/><p className="font-sans text-sm font-bold text-black leading-tight">Vegan</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/meal-prep">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Roasted Vegetable Bowls with Green Tahini and a side of egg and a spoon in the bowl." data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-640x640.jpg 640w, https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-96x96.jpg 96w, https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-225x225.jpg 225w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=50258"/><p className="font-sans text-sm font-bold text-black leading-tight">Meal Prep</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/soup">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Sweet potato peanut stew in a bowl." data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-640x640.jpg 640w, https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-96x96.jpg 96w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/sweet-potato-peanut-stew.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/sweet-potato-peanut-stew.jpg 720w" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=42970"/><p className="font-sans text-sm font-bold text-black leading-tight">Soups</p>
</a>
</li>
<li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
<a className="block md:hover:opacity-60 flex flex-col items-center" href="https://pinchofyum.com/recipes/salad">
<img width="183" height="183" src="https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-183x183.jpg" className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Summer Cobb Salad in a bowl." data-pin-nopin="nopin" sizes="(min-width: 780px) 96px, 80px" decoding="async" srcset="https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-183x183.jpg 183w, https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-400x400.jpg 400w, https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-800x800.jpg 800w, https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-1200x1200.jpg 1200w, https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-640x640.jpg 640w, https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-96x96.jpg 96w, https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Summer-Cobb-Salad-in-Bowl.jpg 360w, https://pinchofyum.com/cdn-cgi/image/width=720,height=720,fit=crop/wp-content/uploads/Summer-Cobb-Salad-in-Bowl.jpg 720w" data-pin-description="This juicy salad tastes like summer! With chipotle chicken, sweet corn, avocado, cilantro vinaigrette, bacon crumbles, and fresh strawberries for a pop of sweetness. #salad #summer #cobbsalad #chipotlechicken #cleaneating | pinchofyum.com" data-pin-url="https://pinchofyum.com/amazing-green-rice?tp_image_id=46144&amp;pin_description=VGhpcyBqdWljeSBzYWxhZCB0YXN0ZXMgbGlrZSBzdW1tZXIhIFdpdGggY2hpcG90bGUgY2hpY2tlbiwgc3dlZXQgY29ybiwgYXZvY2FkbywgY2lsYW50cm8gdmluYWlncmV0dGUsIGJhY29uIGNydW1ibGVzLCBhbmQgZnJlc2ggc3RyYXdiZXJyaWVzIGZvciBhIHBvcCBvZiBzd2VldG5lc3MuICNzYWxhZCAjc3VtbWVyICNjb2Jic2FsYWQgI2NoaXBvdGxlY2hpY2tlbiAjY2xlYW5lYXRpbmcgfCBwaW5jaG9meXVtLmNvbQ%3D%3D"/><p className="font-sans text-sm font-bold text-black leading-tight">Salads</p>
</a>
</li>
</ol> */}
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
