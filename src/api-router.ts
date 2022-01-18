import express from 'express';
const apiRouter = express.Router();

import { MyResponse } from './@types';

import msg from './index';

apiRouter.get('/', (req, res) => {
    const myResp: MyResponse = {
        result: true,
        description: 'Welcome to Hello World Express and Typescript Application ' + new Date().toISOString()
    };

    return res.status(200).json(myResp);
});

apiRouter.get('/about', (req, res) => {
    const myResp: MyResponse = {
        result: true,
        description: 'MESSAGE from env variable is: ' + msg,
        data: new Date().toISOString()
    };

    return res.status(200).json(myResp);
});

apiRouter.get('/greet/:yourname', (req, res) => {
    const myResp: MyResponse = {
        result: true,
        description: 'processed successfully',
        data: 'Welcome ' + req.params.yourname + ' the current time is ' + new Date().toISOString()
    };

    return res.status(200).json(myResp);
});

//export the apiRouter
export { apiRouter };