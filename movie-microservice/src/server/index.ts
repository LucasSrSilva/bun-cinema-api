import openapi from "@elysiajs/openapi";
import Elysia from "elysia";
import { movies } from "../movie";

export const app = new Elysia({ prefix: '/api' })
    .use(openapi())
    .get("/", () => "Hello Elysia")
    .use(movies);

export function startServer() {
    app.listen(3000)
    console.log(
        `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
}