import express from 'express';
import booksController from './controller/booksController.js'

const app = express();
const port = 8080; 


booksController(app)

app.listen(port, ()=>{
    console.log(`Serving on port ${port}, http://localhost:${port}`);
});