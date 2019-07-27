import orderModel, { ITest }  from '../models/test';

export class TestRepository {
    public getTest = () => {
        return orderModel.find().exec();
    }
}
