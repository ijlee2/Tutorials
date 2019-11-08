import dotenv from 'dotenv';

dotenv.config();

export default {
    environment: process.env.NODE_ENVIRONMENT,
    port: process.env.PORT
};