import {Router} from "express"
import verifyToken from "../../../components/middlewares/verifyToken";
import isMerchantOrHigher from "../../../components/middlewares/VerifyRoles/isMerchantOrHigher";
import {
    productDiscountCreateValidator
} from "../../../components/middlewares/Validators/Site/discounts";
import {
    productDiscountCreate
} from "../../../controllers/Site/discounts";


const DiscountRoutes =Router()


DiscountRoutes.route("/")
    .post(verifyToken,isMerchantOrHigher,productDiscountCreateValidator,productDiscountCreate)

export default DiscountRoutes;