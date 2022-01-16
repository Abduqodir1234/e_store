import {Router} from "express"
import verifyToken from "../../../components/middlewares/verifyToken";
import isMerchantOrHigher from "../../../components/middlewares/VerifyRoles/isMerchantOrHigher";
import {
    productDiscountCreateValidator,
    productDiscountUpdateValidator
} from "../../../components/middlewares/Validators/Site/discounts";
import {
    productDiscountCreate,
    productDiscountDeleteById,
    productDiscountGetById,
    productDiscountList,
    productDiscountUpdateById
} from "../../../controllers/Site/discounts";


const DiscountRoutes = Router()


DiscountRoutes.route("/")
    .post(verifyToken,isMerchantOrHigher,productDiscountCreateValidator,productDiscountCreate)
    .get(productDiscountList)
DiscountRoutes.route("/:id")
    .get(productDiscountGetById)
    .patch(verifyToken,isMerchantOrHigher,productDiscountUpdateValidator,productDiscountUpdateById)
    .delete(verifyToken,isMerchantOrHigher,productDiscountDeleteById)

export default DiscountRoutes;