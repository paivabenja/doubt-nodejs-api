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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const clothes_1 = __importDefault(require("./routes/clothes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware to make req.body a json
app.use(express_1.default.static(path_1.default.join(__dirname, 'media'))); // middleware to use static services (media)
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.set('PORT', 8000);
app.get('/ping', (_req, res) => {
    console.log('received a ping');
    res.send('pong');
});
app.use('/api/clothes', clothes_1.default);
app.listen(app.get('PORT'), () => {
    console.log(`Server running on port: ${app.get('PORT')}`);
});
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const DB = yield mongoose_1.default.connect('mongodb://paiva:contrasenia@mongo-doubt:27017/ropa?authSource=admin');
    console.log(`Connected to ${DB.connection.db.databaseName} succesfully!`);
});
void connectToDB();
