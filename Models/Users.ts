import { model, Schema,Document} from "mongoose";
import bcrypt from "bcrypt"


export interface UserDocument extends Document{
    name:string,
    address:string,
    email:string,
    password:string,
    phone:string,
    role:string,
    photo:string,
    createdAt:Date,
    updatedAt:Date,
    matchPassword:any
}


let user_schema = new Schema({
    name:{
        type:String,
        required:[true,"Name must be provided"]
    },
    address:{
        type:String,
        required:[true,"Address must be provided"]
    },
    email:{
        type:String,
        required:[true,"Email must be provided"],
        unique:[true,"Email must be unique"]
    },
    password: {
        type:String,
        required:[true,"Password must be provided"]
    },
    phone:{
        type:String,
        required:false
    },
    role:{
        type:String,
        enum:{
            values:["1","2"],
            message:"{VALUE} is not supported"
        },
        default:"2"
    },   //1=>admin,2=>user,
    photo:{
        type:String,
        required:false
    }
},{timestamps:true})



// Encrypt password using bcrypt
user_schema.pre('save', async function(next){
    if(!this.isModified('password')) {
        next()
    };
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
});

//  Match user entered password to hashed password in database
user_schema.methods.matchPassword = function(candidatePassword,cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(null,false);
        cb(null, isMatch);
    });
};



let Users = model("users",user_schema)
export default Users;