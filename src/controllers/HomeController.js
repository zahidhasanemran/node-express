"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    static index(req, res) {
        res.send("Hello world from HomeController");
    }
    static about(req, res) {
        res.send("i am about page ");
    }
}
exports.default = HomeController;
