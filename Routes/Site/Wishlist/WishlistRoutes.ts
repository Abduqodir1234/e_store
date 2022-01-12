import {Router} from "express";
import verifyToken from "../../../components/middlewares/verifyToken";
import {
    wishlistChange,
    wishlistProducts
} from "../../../controllers/Site/wishlist";
import {
    wishlistAddOrRemove
} from "../../../components/middlewares/Validators/Site/wishlist";

let WishlistRoutes = Router()

WishlistRoutes.route("/")
    .post(verifyToken,wishlistAddOrRemove,wishlistChange)
    .get(verifyToken,wishlistProducts)
export default WishlistRoutes