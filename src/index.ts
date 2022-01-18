import express from 'express';

import { apiRouter } from './api-router';

const app = express();
const port = process.env.PORT || 9080;

const msg = process.env.MESSAGE || 'this will come from MESSAGE env variable';
export default msg;

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Hello World Express/Typescript application is running on port ${port}.`);
  console.log(`MESSAGE=${msg}`);
});