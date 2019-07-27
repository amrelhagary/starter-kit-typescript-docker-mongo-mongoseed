import * as express from 'express';
import { TestController } from '../controllers/TestController';

export class TestRoute {
    public routes: any;

    constructor(testController: TestController) {
        this.routes = express();
        this.routes.get('/test', testController.getTest);
    }
}
