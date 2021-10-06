import { Pool, QueryResult } from 'pg';
import {  ProdDatabase } from '../util/dotenv';


export const query = async (query: string, values: any[] = []): Promise<QueryResult<any>> => {
    const pool = new Pool(ProdDatabase)
    const res = await pool.query(query, values)
    await pool.end()
    return res;
}

export const pool = new Pool(ProdDatabase)