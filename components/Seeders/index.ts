const LANGS = ['ru','uz']

let mongoose = require("mongoose")

let DB_URL = "mongodb://127.0.0.1:27017/e-commerce1"









const ProvinceSeeders = [
    //uz regions
    {
        name_uz:"Qoraqalpog'iston",
        name_ru:"Республика Каракалпакстан",
        price:15000
    },
    {
        name_uz:"Andijon viloyat",
        name_ru:"Андижанская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Buxoro viloyat",
        name_ru:"Бухарская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Farg'ona viloyat",
        name_ru:"Ферганская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Jizzax viloyat",
        name_ru:"Джизакская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Xorazm viloyat",
        name_ru:"Хорезмская область",
        lang:"uz"
    },
    {
        name_uz:"Namangan viloyat",
        name_ru:"Наманганская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Navoiy viloyat",
        name_ru:"Навоийская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Qashqadaryo viloyat",
        name_ru:"Кашкадарьинская область",
        lang:"uz",
        price:15000

    },
    {
        name_uz:"Samarqand viloyat",
        name_ru:"Самаркандская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Sirdaryo viloyat",
        name_ru:"Сырдарьинская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Surxandaryo viloyat",
        name_ru:"Сурхандарьинская область",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Toshkent shahri",
        name_ru:"Город Ташкент",
        lang:"uz",
        price:15000
    },
    {
        name_uz:"Toshkent viloyati",
        name_ru:"Ташкентская область",
        lang:"uz",
        price:15000
    },
]


let provinces_schema = new mongoose.Schema({
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
        type:Number
    }
},{timestamps:true})

let Provinces =mongoose.model("provinces",provinces_schema)

let start = async ()=>{
    try{
       await mongoose.connect(DB_URL)
       await Provinces.deleteMany()
       await Provinces.insertMany(ProvinceSeeders)
        console.log("ok")
        process.exit(0)
    }
    catch (e) {
        console.log(e)
    }

}

start()