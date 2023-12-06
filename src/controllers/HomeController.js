"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    static getItems(req, res) {
        res.json(HomeController.items);
    }
    static addItem(req, res) {
        var _a;
        const newItem = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.item;
        HomeController.items.push(newItem);
        console.log(newItem);
        res.status(201).json({ message: 'Items added successfully', item: newItem });
    }
    static updateItem(req, res) {
        var _a, _b;
        const index = Number((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.index);
        const updatedItem = (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.item;
        HomeController.items[index] = updatedItem;
        res.json({ message: 'Item updated', item: updatedItem });
    }
    static deletedItem(req, res) {
        var _a;
        const index = Number((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.index);
        const deletedItem = HomeController.items.splice(index, 1)[0];
        if (deletedItem) {
            res.json({ message: 'Item deleted', item: deletedItem });
        }
        else {
            res.status(404).json({ message: 'Item not founded' });
        }
    }
    static index(req, res) {
        res.send("Hello world from HomeController");
    }
    static about(req, res) {
        res.send("i am about page ");
    }
}
HomeController.items = [
    { id: 1, name: 'Zahid Hasan Emran' },
    { id: 2, name: 'Khadiza binte Emran' },
];
exports.default = HomeController;
