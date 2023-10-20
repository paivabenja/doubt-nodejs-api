"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const clothesServices = __importStar(require("../services/clothes"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: 'media/' });
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        res.send(yield clothesServices.getAllClothes());
    });
    getData().catch((err) => console.log(err));
});
router.get('/id/:id', (req, res) => {
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        res.send(yield clothesServices.getClotheByID(req.params.id));
    });
    getData().catch((err) => console.log(err));
});
router.get('/type/:type', (req, res) => {
    console.log(req);
    const getData = () => __awaiter(void 0, void 0, void 0, function* () {
        res.send(yield clothesServices.getClothesByType(req.params.type));
    });
    void getData();
});
const clthImgs = upload.fields([{ name: 'img_front', maxCount: 1 }, { name: 'img_back', maxCount: 1 }]);
router.post('/', clthImgs, (req, res) => {
    res.send(clothesServices.postClothe(req));
});
exports.default = router;
