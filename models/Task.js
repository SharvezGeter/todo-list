
//Import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


//created blogSchema
const toDolistSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    completed:{type: Boolean, required: true},
    dateCreated: {type: Date, default: Date.now(), required: true},
    dateCompleted: {type: Date},
    id: {type: String, default: uuidv4()},
    status: {type: String, default: 'incomplete', required: true, enum: ['incomplete', 'complete', 'deferred']}

});

//register model to collection
const Task = mongoose.model("toDoList", toDolistSchema);

//make our model accessible to outside files
module.exports = Task;