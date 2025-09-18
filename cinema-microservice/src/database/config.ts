import * as mongoose from 'mongoose'

export async function start() {   
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/bun-cinemas');
        console.log("connected to the database");
    }catch{
        console.log("Error connecting to the database");
        
    }
}
