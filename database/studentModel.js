import { Schema ,model} from "mongoose";
const studentSchema=new Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Date,
            required:false
        }
    },
    {timestamps:true}
)
export default model("yassers",studentSchema)