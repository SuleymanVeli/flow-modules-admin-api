import {Document} from 'mongoose';
import { IModule } from './module.interface';

export interface IFlow {
    name: string;
    userId:number;
    description: string;
    modules: IModule[];
    status: string;
    createdDate: Date;
    activatedDate: Date;
}

export default interface IFlowModel extends IFlow, Document{}