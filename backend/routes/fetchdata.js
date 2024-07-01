const express = require('express');
const app= express.Router();
const Meal = require('../Model/Meal');




app.get('/getfood/:search', async(req, res) => {
   
  const searchQuery = req.params.search; // Get the search query parameter from the request


  try {
    let meals;
    // console.log(searchQuery);
   
   
    if (searchQuery) {
      // console.log("Search query is",searchQuery)
      // If a search query is provided, perform a search based on recipe name
      meals = await Meal.find({ "name": { $regex: new RegExp(searchQuery, 'i') } }).limit(20);
      // console.log(meals)
     
    
     
    } else {
      // If no search query is provided, fetch all meals
      meals = await Meal.find();
    }
    res.json(meals); 
  } catch (error) {
 
    res.status(500).json({ message: error.message }); 
  }
     
});
app.get('/getfood', async (req, res) => {
  const limit = 12; 
  try {
    const foodItems = await Meal.find().limit(limit);
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching food items' });
  }
});





module.exports = app;
