import dotenv from 'dotenv';
const result  = dotenv.config();
export const PORT = process.env.PORT;


export const ProdDatabase = {
    user: process.env.PGUSER_PROD || 'postgres',
    host: process.env.PGHOST_PROD || 'localhost',
    database: process.env.PGDATABASE_PROD || 'agre',
    password: process.env.PGPASSWORD_PROD || 'postgres',
    port:  Number(process.env.PGPORT_PROD) || 5432
}