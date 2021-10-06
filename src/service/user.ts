import { query } from "../db/pg";

export const getUser = async() => {
    let data = await query('SELECT 1;')
    return data.rows;
}

export const login = async(username: string, password: string) => {
    let data = await query('SELECT * from users WHERE user_name =$1 and password = $2', [username, password]);
    return data.rows[0];
}