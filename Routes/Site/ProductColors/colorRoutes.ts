import {Router} from "express";
import verifyToken from "../../../components/middlewares/verifyToken";
import isMerchantOrHigher from "../../../components/middlewares/VerifyRoles/isMerchantOrHigher";
import {productCategoryCreateValidator} from "../../../components/middlewares/Validators/Site/category";
import {
    productColorsCreate,
    productColorsDelete,
    productColorsGetById,
    productColorsList,
    productColorsUpdate
} from "../../../controllers/Site/colors";
import isSuperAdmin from "../../../components/middlewares/VerifyRoles/isSuperAdmin";

let ColorRoutes = Router()

ColorRoutes.route("/")
    .post(verifyToken,isMerchantOrHigher,productCategoryCreateValidator,productColorsCreate)
    .get(productColorsList)

ColorRoutes.route("/:id")
    .get(productColorsGetById)
    .patch(verifyToken,isSuperAdmin,productCategoryCreateValidator,productColorsUpdate)
    .delete(verifyToken,isSuperAdmin,productColorsDelete)


export default ColorRoutes