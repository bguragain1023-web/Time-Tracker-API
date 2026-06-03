import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        requird:true,
    },
    hr:{
        type:Number,
        required:true,
        max:[100, "Are you crazy?"],
        min:1,
    },

    type:{
        type:String,
        default:"entry",
        enum:["entry", "bad"]

    }
},
{timestamps:true,});
 const TaskCollection = mongoose.model("Task", taskSchema);

export const insertTask = (taskobj) =>{
    return TaskCollection(taskobj).save();
};
export const getTask = () =>{
    return TaskCollection.find();
};
export const updateTask = (_id, rest) =>{
    return TaskCollection.findByIdAndUpdate(_id, rest, {new:true,});
};
// export const deleteTask = (_id) =>{
//     return TaskCollection.findByIdAndDelete(_id);
// };
export const deleteTask = (ids) =>{
    return TaskCollection.deleteMany({_id: { $in: ids }});
};