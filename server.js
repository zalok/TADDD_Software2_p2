const express = require('express');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

dotenv.config();

const mongoUri = process.env.MONGO_DB;
const client = new MongoClient(mongoUri);
const port = process.env.PORT || 8000;
const jwtSecret = process.env.JWT_SECRET

const app = express();
app.use(express.json());

//api inciada en el puerto
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

let db;
client.connect()
  .then(() => {
    db = client.db('TADDD_Software2_p2');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));



