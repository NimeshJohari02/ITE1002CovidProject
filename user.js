const mongoose=require("mongoose");
const validator=require("validator");
const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true,
    },
    email: {
    type: String,
    trim: true,
    unique: true,
    lowecase: true,
    required: true,
    validate(value) {
    if (!validator.isEmail(value)) {
    throw new Error("Email Not Valid ");
    }
    }
    },
    message:{
        type:String
    }
})

const User=mongoose.model("User",userSchema);
 
module.exports=User;


