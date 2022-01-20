import {model, Schema} from "mongoose";
import {LANGS} from "../components/Variables";

let provinces_schema = new Schema({
    name_uz:{
        type:String,
        required:true
    },
    name_ru:{
        type:String,
        required:true
    },
    lang:{
        type:String,
        enum:LANGS
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

let Provinces = model("provinces",provinces_schema)
export default Provinces