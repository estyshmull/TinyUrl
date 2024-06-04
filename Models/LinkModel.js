import mongoose from "mongoose";

const LinkSchema=mongoose.Schema({
    originalUrl:String,
    clicks:[
        {
            ipAddress:String,
            time:Date,
            targetParamValue:String
        }
    ],
    targetParamName:String,
    targetValue:[{
        name:String,
        value:String,
    }]
});
export default mongoose.model("links",LinkSchema);