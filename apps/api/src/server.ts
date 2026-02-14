import fastify from "fastify"
import cors from "@fastify/cors"
import {routes} from "./routes.js"
import { greeting } from "@repo/crypto";

export const createServer = () => {
    const app = fastify({logger:true});
    app.register(cors, {
        origin: true,
    })
    app.get('/', () => {
        return { status: 'ok', content: greeting() }
    })
    app.register(routes); // is ther need to mention about prefix?

    return app;

}

// export function createServer() {
    

// }
// const app=fastify();



// app.get('/health', async() =>{
//     return {status: 'ok'}
// })
// app.register(routes)


// const port = 4000;
// app.listen({port, host:'0.0.0.0'}, () => {
//     console.log('app is running on port: ', port);
// })