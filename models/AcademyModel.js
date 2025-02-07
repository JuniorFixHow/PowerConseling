import  mongoose from "mongoose";

const AcademySchema = new mongoose.Schema({
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
        type:{country:String, region:String, city:String}
    },
    interest:{
        type:String,
        required:true
    }
},{timestamps:true});

const Academy = mongoose.models.Academy || mongoose.model('Academy', AcademySchema);

export default Academy;
