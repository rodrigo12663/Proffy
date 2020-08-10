import express from 'express';


import classesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const ClassesControllers = new classesController();

const ConnectionController = new ConnectionsController();

routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);

routes.post('/connections', ConnectionController.create);
routes.get('/connections', ConnectionController.index);

export default routes;

//GET: Busca listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request.body) Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso irá ser atualizado ou criado
//Query Params: Ordenar, paginar e filtrar