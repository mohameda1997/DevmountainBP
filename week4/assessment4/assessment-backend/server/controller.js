const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/api/compliment', (req, res) => {
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
});

app.get('/api/fortune', (req, res) => {
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
});

app.get('/api/inspirational-quote', (req, res) => {
  let randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  let randomQuote = inspirationalQuotes[randomIndex];
  res.status(200).send(randomQuote);
});

app.post('/api/fortune', (req, res) => {
  const { fortune } = req.body;
  fortunes.push(fortune);
  res.status(200).send("Custom fortune added successfully!");
});

app.delete('/api/fortune/:fortuneIndex', (req, res) => {
  const { fortuneIndex } = req.params;
  if (fortuneIndex >= 0 && fortuneIndex < fortunes.length) {
    fortunes.splice(fortuneIndex, 1);
    res.status(200).send("Fortune deleted successfully!");
  } else {
    res.status(400).send("Invalid fortune index.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

  