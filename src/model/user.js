const mongoose = require("mongoose");


const schema_user = new mongoose.Schema({
    fullname:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    phone:{type:String},
    user:{type:String , require:true, unique:true},
    password:{type:String, require:true}
});

module.exports =mongoose.model("users",schema_user );

