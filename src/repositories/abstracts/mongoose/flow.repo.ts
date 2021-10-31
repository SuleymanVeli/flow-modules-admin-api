import { inject, injectable } from 'inversify';
import {Schema,model,Model} from 'mongoose';
import { TYPES } from '../../../constants/types';
import FlowModel from '../../../models/abstracts/flow.model';
import IFlowModel from '../../../models/interfaces/flow.interface';
import IFlowRepository from '../../interfaces/flow.repo';
import BaseService from "./base.repo";

@injectable()
export default class FlowRepository 
extends BaseService<IFlowModel>
implements IFlowRepository
{
    constructor(@inject(TYPES.IModel) model: FlowModel){
        super(model)
        console.log(model)
    }
}