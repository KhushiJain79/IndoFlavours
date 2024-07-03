const connectDB = require('./db');
const express = require('express');

const cors = require('cors');

const app = express();
connectDB();
const port = process.env.PORT || 5000;

app.use(cors({ origin: ['https://indo-flavours.vercel.app','http://localhost:5173']}));

app.use(express.json());

app.use('/api/fetchdata', require('./routes/fetchdata'));


app.listen(port, () => {
  console.log(`foodVita listening on port http://localhost:${port}`);
});

