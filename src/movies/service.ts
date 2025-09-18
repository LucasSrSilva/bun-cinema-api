import type { Movie } from "./model";
import { MovieSchema } from "../database/schema";

export abstract class MovieService {
    static async getMovies(): Promise<Movie[]> {
        try {
            const movies: Movie[] = await MovieSchema.find()
            return movies
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    static async getMovieById(id: string): Promise<Movie> {
        try {
            const movie = await MovieSchema.findById(id);
            if (!movie) throw new Error('Movie not found');
            return movie;
        } catch (error) {
            console.log(error)
            throw new Error(`${error}`)
        }
    }
    static async addMovie(body: Movie): Promise<Movie> {
        try {
            const movie = await MovieSchema.create(body)
            return movie;
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    static async editMovie(id: string, body: Movie): Promise<Movie> {
        try {
            const movie = await MovieSchema.findByIdAndUpdate(id, body, { new: true })
            if (!movie) throw new Error('Movie not found');
            return movie;
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
    static async deleteMovie(id: string): Promise<Movie> {
        try {
            const movie = await MovieSchema.findByIdAndDelete(id)
            if (!movie) throw new Error("Movie not found");
            return movie
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}
