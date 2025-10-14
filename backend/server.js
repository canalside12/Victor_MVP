
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

// Simple Markus test endpoint (placeholder)
app.post('/api/markus/query', async (req, res) => {
  const { prompt } = req.body;
  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json({ reply: `Markus placeholder: received '${prompt}'. (OPENAI_API_KEY not set)` });
  }
  // Real OpenAI call would go here.
  return res.json({ reply: `Markus would respond to: ${prompt}` });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Victor backend running on ${PORT}`));
