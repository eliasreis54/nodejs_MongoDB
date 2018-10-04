import express from 'express';
import bodyParser from 'body-parser';
import UserRouter from './routers/user';

const app = express();
app.use(bodyParser.json());
app.use(UserRouter);
app.listen(3000, () => {
  console.log('server running');
});
