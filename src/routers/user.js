import { Router } from 'express';
import User from '../models/user';

const UserRouter = Router();

UserRouter.get('/user', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

UserRouter.post('/user', (req, res) => {
  res.send('post');
});

UserRouter.put('/user', (req, res) => {
  const user = new User({ name: 'Elias', age: '22' });
  user.save();
  res.send('put');
});

UserRouter.delete('/user', (req, res) => {
  res.send('delete');
});

export default UserRouter;
