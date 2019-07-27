import * as mongoose from 'mongoose';
import { MONGODB_URI } from '../config';


mongoose.set('debug', process.env.NODE_ENV !== 'prod' || false);
mongoose.set('useFindAndModify', false);
const db = mongoose.createConnection(MONGODB_URI, {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'MongoDB Connection Error!'));
db.on('open', () => console.log('MongoDB Connection Open!'));

export default db;
