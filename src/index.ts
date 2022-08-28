import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT;

app.get('/', (request: Request, response: Response) => {
      response.send('OK!!!@@@@');
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});