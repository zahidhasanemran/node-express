import express from 'express';
import HomeController from '../controllers/HomeController'
import ContactController from '../controllers/ContactController'

const router = express.Router();

router.get("/", HomeController.index)
router.get("/about", HomeController.about)
router.get("/contact", ContactController.index)

export default router;