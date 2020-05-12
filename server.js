// Imports
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Server Intance
const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

// Use
app.use(express.json());
app.use('/api/v1/bootcamps', require('./routes/router'));

// Server Listen
app.listen(PORT, (err) => {
  if (err) {
    console.log('Erro no servidor');
  } else {
    console.log(`Server is running on ${PORT}`.toUpperCase().blue);
  }
});
