import {model, Schema} from "mongoose";

const taskSchema = new Schema({
  title: String
});

export default model('Task', taskSchema);