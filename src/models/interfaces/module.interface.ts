import {Document} from 'mongoose';

export interface IModule {
    name: string;
    data: any;
    class: string;
    html: string;
    typenode: boolean;
    inputs: any;
    outputs: any;
    pos_x: number;
    pos_y: number;
}

export default interface IModuleModel extends IModule, Document{}