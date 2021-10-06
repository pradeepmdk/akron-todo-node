import { query } from "../db/pg";

export const addTodo = async (name: string) => {
    let data = await query('INSERT INTO todo(name) VALUES ($1);', [name]);
    return data.rows[0];
}

export const getTodo = async () => {
    let data = await query('SELECT * FROM todo where actv_fl = true;');
    return data.rows;
}

export const saveComplete = async (id: any) => {
    const now = new Date()
    let data = await query('UPDATE todo set completed_at = $1 WHERE id = $2', [now, id]);
    return data.rows;
}

export const archiveTodo  = async (id: any) => {
    let data = await query('UPDATE todo set actv_fl = false WHERE id = $1', [id]);
    return data.rows;
}

export const getTodoCreatedCount = async (startDate: any, endDate: any) => {
    let data = await query('SELECT COUNT(*) FROM todo WHERE created_at BETWEEN $1 AND $2 AND actv_fl = true;', [startDate, endDate]);
    return data.rows;
}