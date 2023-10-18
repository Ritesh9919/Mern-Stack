const express = require('express');
const cors = require('cors');
const port = 8000;

const app = express();
app.use(express.json());
app.use(cors());



app.get('/data', (req, res)=> {
    res.json({name:'Ritesh'});
})


app.listen(port, ()=> {
    console.log('Server is running on port:', port);
})



