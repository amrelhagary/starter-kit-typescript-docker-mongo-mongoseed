import { Request, Response } from 'express';
import { TestRepository } from '../repositories/TestRepository';
import testModel from '../models/test';

export class TestController {

    constructor(private testRepository: TestRepository) {}

    // Get order by company name
    public getTest = async (req: Request, res: Response, next: Function) => {

        try {
            const orders = await this.testRepository.getTest();
            res.json(orders);
        } catch (e) {
            this.exceptionHandler(res, e);
        }
    }

    // Exception handler
    private exceptionHandler = (res: Response, error: Error) => {
        if (process.env.NODE_ENV === 'dev') { console.error(error); }
        res.status(500).send(error.toString());
    }
}
