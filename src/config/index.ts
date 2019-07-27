import { config } from 'dotenv';

config({path: `${__dirname}/../../.env`});

export const MONGODB_URI = process.env.MONGODB_URI || '';
