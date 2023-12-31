"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HomeController_1 = __importDefault(require("../controllers/HomeController"));
const ContactController_1 = __importDefault(require("../controllers/ContactController"));
const router = express_1.default.Router();
router.get("/", HomeController_1.default.index);
router.get("/about", HomeController_1.default.about);
router.get("/contact", ContactController_1.default.index);
// CRUD Routes
router.get("/items", HomeController_1.default.getItems);
router.post("/items", HomeController_1.default.addItem);
router.patch("/items/:index", HomeController_1.default.updateItem);
// router.delete("/items/:index", HomeController.deletedItem);
exports.default = router;
