const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

const app = require("./app");

const port= process.env.RUNNING_PORT || 8080



//for your review I used this database URI here, otherwise I'll set this URI in config.env
mongoose.connect("mongodb+srv://tanvieDEV:whPUW4YdIjPeP0mi@cluster0.fb1wzfq.mongodb.net/ostad?retryWrites=true&w=majority")
.then(()=>{
    console.log(`Database connection is successful ` );
    
    app.listen(port, () => {
        console.log(`Ecom Server Running on Port ${port}`)
    })
});
  


