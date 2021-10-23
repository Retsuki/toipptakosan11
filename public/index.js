"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const functions = __importStar(require("firebase-functions"));
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const app_module_1 = require("./app.module");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
firebase_admin_1.default.initializeApp();
const db = firebase_admin_1.default.firestore();
const app = (0, express_1.default)();
async function getAllowOriginList() {
    return db.doc(`cors/main`)
        .get()
        .then((doc) => {
        return doc.get('allow_origin');
    });
}
const corsOptionsDelegate = async function (req, callback) {
    const allowlist = await getAllowOriginList();
    const corsOptions = allowlist.indexOf(req.header('Origin')) !== -1
        ? { origin: true }
        : { origin: false };
    callback(null, corsOptions);
};
app.use((0, cors_1.default)(corsOptionsDelegate));
const createNestServer = async (expressInstance) => {
    const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    return nestApp.init();
};
createNestServer(app).then(() => console.log('Nest Ready')).catch;
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map