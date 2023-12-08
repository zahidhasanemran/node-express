"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class HomeController {
    static connectToDb() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield mongodb_1.MongoClient.connect('mongodb+srv://nexusemran:123456780@firsttry.jezp7ok.mongodb.net/?retryWrites=true&w=majority', {});
            HomeController.db = client.db("nodeexpress");
            HomeController.collection = HomeController.db.collection(HomeController.collectionName);
        });
    }
    static getItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!HomeController.db) {
                    yield HomeController.connectToDb();
                }
                //@ts-ignore
                const allItem = yield HomeController.collection.find({}).toArray();
                res.json(allItem);
            }
            catch (error) {
                console.error("Error fetching items:", error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    static addItem(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!HomeController.db) {
                    yield HomeController.connectToDb();
                }
                const newItem = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.item;
                yield HomeController.db.collection(HomeController.collectionName).insertOne(newItem);
            }
            catch (error) {
                console.error("Error adding item:", error);
                res.status(500).json({ message: "Internal Server Error" });
            }
            res.status(201).json({ message: 'Item added successfully' });
        });
    }
    static updateItem(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!HomeController.db) {
                    yield HomeController.connectToDb();
                }
                const index = Number((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.index);
                const updatedItem = (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.item;
                yield HomeController.db.collection(HomeController.collectionName).updateOne({ id: index }, // Assuming _id is the unique identifier
                { $set: updatedItem });
                res.json({ message: 'Item updated', item: updatedItem });
            }
            catch (error) {
                console.error("Error updating item:", error);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    // public static async deletedItem(req: Request, res: Response):Promise<void> {
    //   const index: number = Number(req?.params?.index);
    //   const deletedItem: Item | undefined = HomeController.items.splice(index, 1)[0];
    //   if(deletedItem){
    //     res.json({message: 'Item deleted', item: deletedItem});
    //   }else{
    //     res.status(404).json({message: 'Item not founded'});
    //   }
    // }
    static index(req, res) {
        res.send("Hello world from HomeController");
    }
    static about(req, res) {
        res.send("i am about page ");
    }
}
HomeController.collectionName = "items";
exports.default = HomeController;
