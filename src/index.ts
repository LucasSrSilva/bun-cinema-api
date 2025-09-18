import openapi from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { movies } from "./movies";
import { start } from "./database/config";

start()

const app = new Elysia({ prefix: '/api' })
  .use(openapi())
  .get("/", () => "Hello Elysia")
  .use(movies)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
