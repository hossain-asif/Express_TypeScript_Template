
import express from 'express';
import { serverConfig } from './config'; 
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import logger from "./config/logger.config";
import { attachedCorrelationIdMiddleware } from './middlewares/correlation.middleware';

// temporary header



const app = express();

app.use(express.json()); // For JSON bodies
app.use(express.urlencoded()); 


app.use(attachedCorrelationIdMiddleware);

// registering all the routers and their corresponding routes with our app server object.
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.use(genericErrorHandler);
app.use(appErrorHandler);


app.listen(serverConfig.PORT, ()=>{
    // console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    // console.log(`Press Ctrl + C to stop the server.`);
    
    // logger
    //     .clear()
    //     .add(console)
    //     .add(files)
    //     .remove(console)
    

    logger.info(`Server is running on http://localhost: ${serverConfig.PORT}`);
    logger.info(`Press Ctrl + C to stop the server.`, {"title": "press it to stop the server"});
    
});

 