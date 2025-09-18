import * as mongoose from 'mongoose'

export async function connectToDatabase() {   
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/bun-movies');
        console.log("connected to the database");
    }catch{
        console.log("Error connecting to the database");
    }
}

export async function disconnectFromDatabase() {
    try {
        await mongoose.disconnect()
        console.log("disconnected from database");
    } catch (error) {
        console.log("Error disconnecting from database");
    }
}
