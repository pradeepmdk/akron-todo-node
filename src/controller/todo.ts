import { Request, Response, NextFunction } from "express"
import * as TodoService from "../service/todo";


export const addTodo = async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    try {
        let data = await TodoService.addTodo(body.name);
        res.send(data)
    } catch (err) {
        res.status(500).send(err);
    } finally {

    }
}

export const getTodo = async(req: Request, res: Response) => {
    try {
        let data = await TodoService.getTodo();
        res.send(data)
    } catch(err) {
        res.status(500).send(err);
    } finally {

    }
}

export const saveComplete = async(req: Request, res: Response) => {
    const id  = req.params.id;
    try {
        let data = await TodoService.saveComplete(id);
        res.send(data)
    } catch(err) {
        res.status(500).send(err);
    } finally {

    }
}
export const archiveTodo = async(req: Request, res: Response) => {
    const id  = req.params.id;
    try {
        let data = await TodoService.archiveTodo(id);
        res.send(data)
    } catch(err) {
        res.status(500).send(err);
    } finally {

    }
}