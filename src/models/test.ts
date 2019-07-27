import * as mongoose from 'mongoose';
import db from '../db/MongoProvider';

export interface ITest extends mongoose.Document {
    test: String;
  }

export const OrderSchema = new mongoose.Schema({
    test: { type: String, required: true}
});

const testModel = db.model<ITest>('Test', OrderSchema);
export default testModel;
