import * as express from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut, interfaces, request, requestParam, response } from "inversify-express-utils";
import { TYPES } from "../constants/types";
import { jwtHandler } from "../middlewares/jwt.middleware";
import { IFlow } from "../models/interfaces/flow.interface";
import IFlowRepository from "../repositories/interfaces/flow.repo";

@controller("/flows",jwtHandler)
export default class FlowController implements interfaces.Controller {
    private readonly flowRepository: IFlowRepository;

    constructor(@inject(TYPES.IFlowRepository) flowRepository: IFlowRepository) {
        this.flowRepository = flowRepository;
    }

    @httpGet("")
    public async get(@request() req: express.Request, @response() res: express.Response) {

        return this.flowRepository.get({})
            .then((flows: IFlow[]) => res.status(200).json(flows));
    }

    @httpPost("")
    public async add(@request() req: express.Request, @response() res: express.Response) {

        const flowReq: IFlow = req.body;

        flowReq.createdDate = new Date();

        return this.flowRepository.post(flowReq)
            .then((flow: IFlow) => res.status(201).json(flow));
    }

    @httpPut("")
    public async update(@request() req: express.Request, @response() res: express.Response) {

        const flowReq: IFlow = req.body;

        //flowReq.createdDate = new Date();

        return this.flowRepository.put(flowReq)
            .then((flow: IFlow) => res.status(201).json(flow));
    }

    

    @httpDelete("/:id")
    public async delete(@requestParam("id") id: string, @request() req: express.Request, @response() res: express.Response) {

        return this.flowRepository.delete(id)
            .then(() => res.status(204).json());
    }
}