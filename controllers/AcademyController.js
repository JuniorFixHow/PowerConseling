import Academy from "../models/AcademyModel.js";

export const createAcademy = async(req, res) =>{
    try {
        const {email} = req.body;
        const aca = await Academy.findOne(email);
        if(aca){
            res.status(422).json('Email used already');
        }
        else{
            const newAca = new Academy( req.body);
            const savedAca = await newAca.save();
            res.status(200).json(savedAca);
        }
        
    } catch (error) {
        console.log(error)
    }
}
export const getAllAcademy = async(req, res) =>{
    try {
        const acas = await Academy.find({});
        res.status(200).json(acas);
        
    } catch (error) {
        console.log(error)
    }
}

export const getAcademy = async(req, res)=>{
    try {
        const {id} = req.params;
        const aca = await Academy.findById(id);
        res.status(200).json(aca);
    } catch (error) {
        console.log(error)
    }
}
export const deleteAcademy = async(req, res)=>{
    try {
        const {id} = req.params;
        await Academy.findByIdAndDelete(id);
        res.status(200).json('Academy deleted successfully');
    } catch (error) {
        console.log(error)
    }
}