import { injectable } from 'inversify';
import {model,Model} from 'mongoose';
import IFlowModel, { IFlow } from '../interfaces/flow.interface';
import IModel from '../interfaces/model.interface';
import { FlowSchema } from '../schemas/flow.shema';

@injectable()
export default class FlowModel implements IModel{  
  model: Model<any, {}> = model<IFlowModel>('flow', FlowSchema);
}

