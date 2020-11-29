import express from 'express';
import './database';
import "reflect-metadata";
import routes from './route';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () =>{
    console.log('Servidor Rodando');
});