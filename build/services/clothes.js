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
const getAllClothes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield Clothe_1.default.find();
});
exports.getAllClothes = getAllClothes;
const getClotheByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield Clothe_1.default.findOne({ _id: new mongodb_1.ObjectId(id) }));
});
exports.getClotheByID = getClotheByID;
const postClothe = (req) => __awaiter(void 0, void 0, void 0, function* () {
    yield Clothe_1.default.create(req);
});
exports.postClothe = postClothe;
const getClothesByType = (type) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Clothe_1.default.findByType(type);
});
exports.getClothesByType = getClothesByType;
