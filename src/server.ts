import express from 'express';
import "reflect-metadata";
import { router } from './routes';
// import {router} from ''

const app = express();

app.use(express.json());
app.use(router);

app.listen(()=> {
    console.log('Server is running on PORT' + 3000)
})