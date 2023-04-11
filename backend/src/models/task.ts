import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Task = new Schema({
    task_id: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    username: {
        type: String
    },
});

export default mongoose.model('Task', Task, 'tasks');