 import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // load .env

const app = express();

// root route
app.get('/', (req, res) => {
  res.send('Server is ready');
});

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "First joke",
      content: "This is the first joke"
    },
    {
      id: 2,
      title: "Second joke",
      content: "This is another joke"
    },
    {
      id: 3,
      title: "Third joke",
      content: "This is the third joke"
    },
    {
      id: 4,
      title: "Fourth joke",
      content: "Here comes joke number four"
    },
    {
      id: 5,
      title: "Fifth joke",
      content: "And this is the fifth joke"
    }
  ];
  res.json(jokes);
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
