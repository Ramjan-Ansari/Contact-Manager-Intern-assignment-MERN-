import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: {type : String, required : true},
    email : {type : String},
    phone : {type : Number, required: true},
    message : {type : String, }
});

const contactModel = mongoose.model("Contact", contactSchema);

export default contactModel;