import express from 'express';
import "reflect-metadata";
import 'express-async-errors';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose';

import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { TYPES } from './constants/types';
import FlowRepository from './repositories/abstracts/mongoose/flow.repo';
import IFlowRepository from './repositories/interfaces/flow.repo';
import "./controllers/flow.controller";
import IModel from './models/interfaces/model.interface';
import FlowModel from './models/abstracts/flow.model';
const swaggerUi = require('swagger-ui-express');

const container = new Container();
container.bind<IFlowRepository>(TYPES.IFlowRepository).to(FlowRepository);
container.bind<IModel>(TYPES.IModel).to(FlowModel).inSingletonScope;

const server = new InversifyExpressServer(container)
server.setConfig((application: express.Application) => {
  application.use(urlencoded({extended: true}));  
  application.use(json());   
});
const app = server.build();

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://bdUser:MHoh33DiqY5AKUxW@cluster0.qke8i.mongodb.net/DynamicCampaign?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();


