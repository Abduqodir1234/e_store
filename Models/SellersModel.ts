import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";

const Sellers_schema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    status:{
        type:String,
        default:"Past"
    },
    card:{
        type:String,
        required:[true,"card number is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
},{timestamps:true})



// Encrypt password using bcrypt
Sellers_schema.pre('save', async function(next){
    if(!this.isModified('password')) {
        next()
    };
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
});


Sellers_schema.methods.matchPassword = function(candidatePassword,cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(null,false);
        cb(null, isMatch);
    });
};


let Sellers = model("model",Sellers_schema)

export default Sellers