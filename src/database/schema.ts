import * as mongoose from 'mongoose'
import { Movie } from '../movies/model'

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    release: { type: Date }
})

export const MovieSchema = mongoose.model<Movie>('Movie', movieSchema)