import { Elysia, t } from "elysia";
import { MovieService } from "./service";
import { movie } from "./model";

export const movies = new Elysia({ prefix: '/movies' })
    .get('/', async () => {
        const movies = await MovieService.getMovies()
        return movies
    })
    .get('/:id', async ({ params: { id }, status }) => {
        try {
            return await MovieService.getMovieById(id)
        } catch{
            return status(404, "movie not found")
        }
    }, { params: t.Object({ id: t.String() }) })
    .post('/', async ({ body }) => {
            return await MovieService.addMovie(body)
    }, { body: movie })

    .put('/:id', async ({ params: { id }, body }) => {
        return await MovieService.editMovie(id, body)
    }, {
        params: t.Object({ id: t.String() }),
        body: movie
    })

    .delete('/:id', async ({ params: { id } }) => {
        return await MovieService.deleteMovie(id)
    }, { params: t.Object({ id: t.String() }) })