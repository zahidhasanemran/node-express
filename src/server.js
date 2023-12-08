"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", routes_1.default);
//@ts-ignore
mongoose_1.default.connect('mongodb+srv://nexusemran:123456780@firsttry.jezp7ok.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
    app.listen(port, () => {
        console.log("Application is running ");
    });
})
    .catch((err) => {
    console.log(err);
});
