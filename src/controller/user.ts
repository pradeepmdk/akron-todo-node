import { Request, Response, NextFunction } from "express"
import * as UserService from "../service/user";

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let data = await UserService.getUser();
        res.send(data)
    } catch (err) {
        res.status(500).send(err);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction)  => {
    const body = req.body;
    try {
        let data = await UserService.login(body.username, body.password);
        if(data) {
            res.send(data)
        } else {
            res.status(500).send("user not found");
        }
    } catch (err) {
        res.status(500).send(err);
    }
}