import express from 'express';
import "reflect-metadata";
import { router } from './routes';
import { AppDataSource } from '../data-source';

AppDataSource.initialize().then(() => {

    const app = express();
    app.use(express.json());
    app.use(router);

    app.listen(3000, () => {
        console.log('Server is running on PORT' + 3000)
    })
})


