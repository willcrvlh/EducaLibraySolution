import express from 'express';

const app = express();
const port = 8080; 

app.listen(port, ()=>{
    console.log(`Serving on port ${port}, http://localhost:${port}`);
});