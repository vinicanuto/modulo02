import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Vinicius Canuto',
    email: 'vcanutodev@gmail.com',
    password_hash: '12345678',
  });
  return res.json(user);
});

export default routes;
