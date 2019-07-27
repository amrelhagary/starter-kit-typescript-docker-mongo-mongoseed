import * as express from 'express';
import * as bodyParser from 'body-parser';
import { TestController } from './controllers/TestController';
import { TestRoute } from './routes/TestRoute';
import { TestRepository } from './repositories/TestRepository';



const application = express();
application.use(bodyParser.json());
const testRepository = new TestRepository();
const testController = new TestController(testRepository);
const testRoute = new TestRoute(testController);
application.use(testRoute.routes);


export default application;
