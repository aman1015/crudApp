import mongoose from 'mongoose';

const connection=()=>{
    const URL='mongodb+srv://superaman200:ystgIuLoNP0OT8kk@cluster0.s7ozkxj.mongodb.net/';
    try{
        mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log("database connected succesfully");

    }catch(error){
        console.log("eroor occured while connecting to database" , error);
    }
}

export default connection;
