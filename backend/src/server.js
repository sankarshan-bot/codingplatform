import express from 'express';
import path from 'path';
import { ENV } from './lib/env.js';

const app = express();
console.log(process.env.PORT);

const __dirname=path.resolve();

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Hello, health' });
})

app.get('/books', (req, res) => {
  res.status(200).json({ message: 'Hello, health' });
})


// malke app for deployment
if(ENV.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,"../frontend/dist" )));

  app.get("/{*any}",(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
});
}



app.listen(process.env.PORT, () => console.log("server is running on port ",ENV.PORT));