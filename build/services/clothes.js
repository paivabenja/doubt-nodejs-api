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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClothesByType = exports.postClothe = exports.getClotheByID = exports.getAllClothes = void 0;
const Clothe_1 = __importDefault(require("../models/Clothe"));
const mongodb_1 = require("mongodb");
// interface PostmanRequest extends Request {
//   files:
// }
const getAllClothes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Clothe_1.default.find();
});
exports.getAllClothes = getAllClothes;
const getClotheByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Clothe_1.default.findOne({ _id: new mongodb_1.ObjectId(id) }));
});
exports.getClotheByID = getClotheByID;
const postClothe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newClth = req.body;
    // if (req.files != null) {
    //   newClth.img_front = req.files.img_front[0].path as File
    //   newClth.img_back = req.files.img_back[0].path
    // } else {
    //   newClth.img_front = req.body.img_front[0].path
    //   newClth.img_back = req.body.img_back[0].path
    // }
    //
    yield Clothe_1.default.create(newClth);
    const hola = typeof req.files;
    console.log(hola);
    console.log(Request.arguments);
});
exports.postClothe = postClothe;
const getClothesByType = (type) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Clothe_1.default.findByType(type);
});
exports.getClothesByType = getClothesByType;
