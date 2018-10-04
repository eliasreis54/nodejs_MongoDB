import { Router } from 'express';

const UserRouter = Router();

UserRouter.get('/user', (req, res) => {
  res.send('get');
});

UserRouter.post('/user', (req, res) => {
  res.send('post');
});

UserRouter.put('/user', (req, res) => {
  res.send('put');
});

UserRouter.delete('/user', (req, res) => {
  res.send('delete');
});

export default UserRouter;
