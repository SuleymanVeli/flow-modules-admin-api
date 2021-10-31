import { Schema } from "mongoose";
import { ModuleSchema } from "./module.shema";

export const FlowSchema: Schema<any> = new Schema({
    name: {
      type: String,
      required: true
    },
    userId: {
        type: Number,
        required: true
      },
    description: {
      type: String,
      required: true
    },
    modules:[ModuleSchema],
    status: {
      type: String,
      required: true
    },
    createdDate: {
      type: Date,
      required: true
    },
    activatedDate: {
      type: String,
      required: false
    }
  });