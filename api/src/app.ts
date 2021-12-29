import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import MasterRouter from './routers/MasterRouter';
import bodyParser from 'body-parser';
import { connectToDatabase } from './db/conn';

// load the environment variables from the .env file
dotenv.config({
    path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    public app = express();
    public router = MasterRouter;
    public jsonParser = bodyParser.json()
    public urlencodedParser = bodyParser.urlencoded({ extended: false })
}

// initialize server app
const server = new Server();

// make server app handle any route starting with '/api'
server.app.use('/api', server.jsonParser, server.router);

// Have Node serve the files for our built React app
server.app.use(express.static(path.resolve(__dirname, '/client')));

// All other GET requests not handled before will return our React app
// server.app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// make server listen on some port
connectToDatabase();

// ((port = process.env.PORT) => {
//     server.app.listen(port, () => console.log(`> Listening on port ${port}`));
// })();

((port = 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();