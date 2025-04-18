
import express from 'express';
import { serverConfig } from './config'; 
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
// import fs from 'fs';

const app = express();

app.use(express.json()); // For JSON bodies
app.use(express.urlencoded()); 




// registering all the routers and their corresponding routes with our app server object.
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.use(genericErrorHandler);
app.use(appErrorHandler);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl + C to stop the server.`);
});

 