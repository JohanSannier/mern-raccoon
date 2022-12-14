const router = require("express").Router();
const authController = require("../controller/auth.controller");
const userController = require("../controller/user.controller");

// auth
router.post("/register", authController.signUp);

// user db
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

module.exports = router;
