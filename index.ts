import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { DB_URL } from "./components/Variables";
import urlLoggerMiddleWare from "./components/Url_Logger";
import errorHandler from "./components/middlewares/error-handler";
import notFound from "./components/middlewares/notFound";
import corsOpts from "./components/corsOpts"
import {
    userRoutes,
    cardRoutes,
    wishlistRoutes,
    productCategoryRoutes,
    productSizeRoutes,
    productColorRoutes,
    discountRoutes,
    cartRoutes,
    productRoutes,
    orderRoutes
} from "./Routes/Site";



let PORT = process.env.PORT || 5000;
let app = express();


/*
    MiddleWares
*/

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended:false}))
app.use(urlLoggerMiddleWare)
app.use(cors(corsOpts))
app.use('/public',express.static('public'));

/*
    URLs
*/
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/card",cardRoutes)
app.use("/api/v1/wishlist",wishlistRoutes)
app.use("/api/v1/product/category",productCategoryRoutes)
app.use("/api/v1/product/size",productSizeRoutes)
app.use("/api/v1/product/color",productColorRoutes)
app.use("/api/v1/product/discounts",discountRoutes)
app.use("/api/v1/cart",cartRoutes)
app.use("/api/v1/product/",productRoutes)
app.use("/api/v1/order/",orderRoutes)
app.use(notFound)
app.use(errorHandler)

let start =async ()=>{
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT,()=>console.log(`Listening in ${PORT}\nDatabase connected`))
    }
    catch{
        console.log("MONGODB Error")
    }

}

start()
