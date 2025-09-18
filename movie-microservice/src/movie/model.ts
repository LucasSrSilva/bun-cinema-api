import { t } from "elysia";

 const movie = t.Object({
    name: t.String(),
    description: t.String(),
    release: t.Date()
})

 type Movie = typeof movie.static

 export { movie, Movie }

