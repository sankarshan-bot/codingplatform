import express from 'express';
import { ENV } from './lib/env.js';

const app = express();
console.log(process.env.PORT);


app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Hello, health' });
})

app.listen(process.env.PORT, () => console.log("server is running on port ",ENV.PORT));