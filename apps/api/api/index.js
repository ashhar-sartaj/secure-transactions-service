const { createServer } = require("../dist/server"); 

let app = null;

module.exports = async (req, res) => {
    if (!app) {
        app = createServer();
        await app.ready();
    }

    app.server.emit("request", req, res);
};
