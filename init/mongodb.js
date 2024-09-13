const mongoose = require('mongoose');


const connectMongodb= async ()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    }
}
module.exports = connectMongodb;