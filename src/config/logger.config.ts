import winston from 'winston';
import { getCorrelatedId } from '../utils/helpers/request.helpers';
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp({format: "MM-DD-YYYY HH-mm-ss"}), // how the timestamp should actually look like.
      winston.format.json(), // format the log as json
      // define a custom print
      winston.format.printf( ({timestamp, level, message, ...data})=>{
        const output = {
          level,
          message,
          timestamp,
          correlationId: getCorrelatedId(), 
          data};
          console.log(output)
        return JSON.stringify(output)
      })
    ),
    transports: [
      new winston.transports.Console(),
      new DailyRotateFile({
        filename: 'logs/%DATE%-app.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '20m',
        maxFiles: '14d'
      })
    ]
  });

export default logger;