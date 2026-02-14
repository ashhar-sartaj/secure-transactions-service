import { createServer } from './server.js'

const app =  await createServer();
const port=4000;
app.listen({ port, host: '0.0.0.0' }, () => {
    console.log('app is running on port: ', port);
})