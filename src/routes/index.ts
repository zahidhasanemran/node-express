import express from 'express';
import HomeController from '../controllers/HomeController'
import ContactController from '../controllers/ContactController'

const router = express.Router();

router.get("/", HomeController.index)
router.get("/about", HomeController.about)
router.get("/contact", ContactController.index)


// CRUD Routes
router.get("/items", HomeController.getItems);
router.post("/items", HomeController.addItem);
router.patch("/items/:index", HomeController.updateItem);
router.delete("/items/:index", HomeController.deletedItem);

export default router;