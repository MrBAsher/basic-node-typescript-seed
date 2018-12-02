import express from 'express';
import bodyparser from "body-parser";
import {WelcomeController} from './controllers';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

app.use(bodyparser.json());

app.use('/welcome', WelcomeController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
