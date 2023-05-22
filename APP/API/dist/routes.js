"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mocks_1 = require("./mocks");
const router = express_1.default.Router();
// all pastries
router.get("/all", function (req, res) {
    res.json(mocks_1.PASTRIES);
});
// id pastries
router.get("/pastrie/:id", function (req, res) {
    const id = req.params.id;
    const pastrie = mocks_1.PASTRIES.find(p => p.id == id);
    if (pastrie)
        res.json(pastrie);
});
router.get('*', function (req, res) {
    res.status(404).json({ error: "Not found" });
});
exports.default = router;
