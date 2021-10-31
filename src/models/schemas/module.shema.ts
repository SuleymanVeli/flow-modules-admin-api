import { Schema } from "mongoose";

export const ModuleSchema: Schema<any> = new Schema({
    name: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    html: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    data: {},
    inputs: {},
    outputs: {},
    pos_x: {
      type: Number,
      required: true
    },
    pos_y: {
      type: Number,
      required: true
    },   
  });