const path = require('path'); 
const express = require('express'); 

const publicPath = path.join(__dirname, '../public');
// console.log(__dirname +'/../public');
// console.log(publicPath);

const port = process.env.port || 3000; 
var app = express(); 

app.use(express.static(publicPath))

// app.get('/', (req, res)=>{
//     res.send('index.html');
// });

app.listen(port, ()=>{ 
    console.log(`listening on port ${port}`);
});