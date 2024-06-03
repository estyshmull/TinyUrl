import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password: String,
    links: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'links'
    }]
})
export default mongoose.model("users",UserSchema);