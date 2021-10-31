import * as express from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut, interfaces, request, requestParam, response } from "inversify-express-utils";
import { TYPES } from "../constants/types";
import { IFlow } from "../models/interfaces/flow.interface";
import { Login } from "../models/interfaces/login.interface";
import IFlowRepository from "../repositories/interfaces/flow.repo";
import jwt from "jsonwebtoken";


@controller("/users")
export default class UserController implements interfaces.Controller {


    constructor() {
    }

    @httpPost("/login")
    public login(@request() req: express.Request, @response() res: express.Response) {

        const login: Login = req.body;

        console.log(login)


        if (login.email != "string") return res.status(404).json()
        if (login.password != "string") return res.status(403).json()


        const token = jwt.sign(
            { user_id: "1", email: login.email },
            "123123123"
        );

        return res.status(200).json(token);
    }
}