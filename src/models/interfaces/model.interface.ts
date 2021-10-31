import {Schema,Model} from 'mongoose';

export default interface IModel{
    model: Model<any, {}>;
}

