import express from "express";
import controller from "../controllers/category.controller";
import { isAdmin } from "../middleware/adminStatus";
import { ensureAuth } from "../middleware/ensureAuth";
import { Schemas, ValidateSchema } from "../middleware/validateSchema";

const router = express.Router();
//Test category Connection
router.get("/test", controller.ping);

/**PRIVATE ROUTES*/

//Create Category
router.post(
  "/new-category",
  ensureAuth(),
  isAdmin(),
  ValidateSchema(Schemas.category.create),
  controller.create
);

//Update Category
router.put(
  "/update-category/:id",
  ensureAuth(),
  isAdmin(),
  ValidateSchema(Schemas.category.update),
  controller.update
);

//Delete Category
router.delete("/remove-category/:id", controller.deleteCategory);

/**PUBLIC ROUTES */

//Get Categories
router.get("/show-categories", controller.getCategories);

//Get Products by Categories
router.get(
  "/showProducts_by_Category",
  ValidateSchema(Schemas.category.update),
  controller.getProducts_Categories
);
export = router;
