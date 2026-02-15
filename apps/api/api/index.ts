import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "../src/routes.js";
import { greeting } from "@repo/crypto";

const app = fastify({ logger: true });

await app.register(cors, { origin: true });
app.register(routes);
app.get('/', () => ({ status: 'ok', content: greeting() }));

export default async function handler(req: any, res: any) {
    await app.ready();
    app.server.emit('request', req, res);
}
