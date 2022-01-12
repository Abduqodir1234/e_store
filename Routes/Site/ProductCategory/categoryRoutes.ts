import {Router} from "express";
import verifyToken from "../../../components/middlewares/verifyToken";
import isMerchantOrHigher from "../../../components/middlewares/VerifyRoles/isMerchantOrHigher";
import {
    productCategoryCreateValidator
} from "../../../components/middlewares/Validators/Site/category";
import {
    productCategoryCreate, productCategoryDelete, productCategoryGetById,
    productCategoryList,
    productCategoryUpdate
} from "../../../controllers/Site/category";
import isSuperAdmin from "../../../components/middlewares/VerifyRoles/isSuperAdmin";

let CategoryRoutes = Router()


CategoryRoutes.route("/")
    .post(verifyToken,isMerchantOrHigher,productCategoryCreateValidator,productCategoryCreate)
    .get(productCategoryList)

CategoryRoutes.route("/:id")
    .get(productCategoryGetById)
    .patch(verifyToken,isSuperAdmin,productCategoryCreateValidator,productCategoryUpdate)
    .delete(verifyToken,isSuperAdmin,productCategoryDelete)

export default CategoryRoutes