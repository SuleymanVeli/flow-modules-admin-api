import { injectable } from "inversify"
import { Model, Types,Document } from "mongoose"
import IModel from "../../../models/interfaces/model.interface"

@injectable()
export default class BaseService<T extends Document>{

    model: Model<any, any>

    constructor(model: IModel){
        this.model = model.model
    }

    post = async (data: T) => {
        const resourse = await this.model.create(data)
        return resourse
    }

    put = async (data: T) => {
        const resourse = await this.model.findByIdAndUpdate(data._id,data)
        return resourse
    }

    get = async (filters = {}): Promise<T[]> =>{
        const resource = await this.model.find(filters) as T[]
        return resource
    }

    getById = async (id: string): Promise<T> => {
        const resource = await this.model.findOne({_id: Types.ObjectId(id)}) as T
        return resource
    }

    delete = (id: string): void => {
        return this.model.remove({_id: Types.ObjectId(id)})
    }

}