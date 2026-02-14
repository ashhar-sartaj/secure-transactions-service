import {createServer} from './src/server.js'
//this index.ts is mainly built for vercel deployment. so we define the serverless entry point.
import type { VercelRequest, VercelResponse } from "@vercel/node";

let app: ReturnType<typeof createServer> | null = null
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (!app) {
        app = createServer();
        app.ready();
    }

    // Forward request to Fastify
    app.server.emit("request", req, res);
}