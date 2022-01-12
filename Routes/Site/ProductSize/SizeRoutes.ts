import {Router} from "express";
import verifyToken from "../../../components/middlewares/verifyToken";
import isMerchantOrHigher from "../../../components/middlewares/VerifyRoles/isMerchantOrHigher";
import {productCategoryCreateValidator} from "../../../components/middlewares/Validators/Site/category";

import isSuperAdmin from "../../../components/middlewares/VerifyRoles/isSuperAdmin";
import {
    productSizesCreate,
    productSizesDelete, productSizesGetById,
    productSizesList,
    productSizesUpdate
} from "../../../controllers/Site/size";

let SizeRoutes = Router()

SizeRoutes.route("/")
    .post(verifyToken,isMerchantOrHigher,productCategoryCreateValidator,productSizesCreate)
    .get(productSizesList)

SizeRoutes.route("/:id")
    .get(productSizesGetById)
    .patch(verifyToken,isSuperAdmin,productCategoryCreateValidator,productSizesUpdate)
    .delete(verifyToken,isSuperAdmin,productSizesDelete)

export default SizeRoutes