import  {Schema, model, models} from "mongoose";

const AcademySchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
    },
    fullname:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    }
},{timestamps:true});

const Academy = models.Academy || model('Academy', AcademySchema);

export default Academy;
