const connectDB = require('./db');
const express = require('express');

const cors = require('cors');

const app = express();
connectDB();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: 'https://indo-flavours.vercel.app', // Replace with your allowed origin
  methods: ['GET', 'POST'], // Allow only specified methods
  allowedHeaders: ['Content-Type'], // Allow only specified headers
}));

app.use(express.json());

app.use('/api/fetchdata', require('./routes/fetchdata'));


app.listen(port, () => {
  console.log(`foodVita listening on port http://localhost:${port}`);
});

