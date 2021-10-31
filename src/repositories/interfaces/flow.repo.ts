import { injectable } from 'inversify';
import IFlowModel, { IFlow } from '../../models/interfaces/flow.interface';

export default interface IFlowRepository {

    post(data: IFlow): Promise<any>

    put(data: IFlow): Promise<any>

    get(filters: {}): Promise<IFlow[]>

    getById(id: string): Promise<IFlow>;

    delete(id: string): any;
}