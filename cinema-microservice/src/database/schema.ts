import * as mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    movieId: {type: mongoose.Schema.Types.ObjectId, required: true},
    name: {type: String, required: true}
})
const sessionSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    movies: [movieSchema],
    price: {type: Number, required: true},
})

const roomSchema = new mongoose.Schema({
    roomNumber: {type: Number, required: true},
    roomSessions: [sessionSchema]
})

const cinemaSchema = new mongoose.Schema({
    country: {type: String, required: true},
    uf: {type: String, required: true, },
    city: {type: String, required: true},
    name: {type: String, required: true},
    rooms: [roomSchema]

})

export const CinemaSchema = mongoose.model('Cinema', cinemaSchema)
