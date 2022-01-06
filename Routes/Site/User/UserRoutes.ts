import {Router} from "express"
import PhotoChecker from "../../../components/middlewares/PhotoChecker"
import verifyToken from "../../../components/middlewares/verifyToken";
import verifyRole from "../../../components/middlewares/VerifyRoles/verifyRole";

import {
    adminUserUpdateValidator,
    userUpdateValidator,
    userCreateValidator,
    loginValidator
} from "../../../components/middlewares/Validators/Site/users"


import {
    userRegister,
    userList,
    login,
    logout,
    getUser,
    userDelete,
    userGetByid,
    userUpdate,
    userUpdateById
} from "../../../controllers/Site/user"
let UserRoutes = Router()



UserRoutes.post("/create",PhotoChecker,userCreateValidator,userRegister)
UserRoutes.get("/list",verifyToken,verifyRole,userList)
UserRoutes.post('/login',loginValidator,login)
UserRoutes.get("/get",verifyToken,getUser)
UserRoutes.patch("/update",verifyToken,PhotoChecker,userUpdateValidator,userUpdate)
UserRoutes.delete("/delete/:id",verifyToken,verifyRole,userDelete)
UserRoutes.post("/logout",verifyToken,logout)
UserRoutes.get("/get/id/:id",verifyToken,verifyRole,userGetByid)
UserRoutes.patch("/update/id/:id",verifyToken,verifyRole,PhotoChecker,adminUserUpdateValidator,userUpdateById)



export default UserRoutes