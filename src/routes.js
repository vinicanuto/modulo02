import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
// Todas as rotas abaixo validará a sessao
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
