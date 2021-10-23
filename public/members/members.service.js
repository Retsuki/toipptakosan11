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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.MembersService = void 0;
const axios_1 = __importDefault(require("axios"));
const common_1 = require("@nestjs/common");
const functions = __importStar(require("firebase-functions"));
const MICRO_CMS_API_KEY = functions.config().microcms.api_key;
let MembersService = class MembersService {
    async getMember(id) {
        const response = await axios_1.default.request({
            method: 'GET',
            url: `https://toipptakosan11.microcms.io/api/v1/member-meta/${id}`,
            headers: {
                'X-API-KEY': MICRO_CMS_API_KEY,
            },
        });
        return response.data;
    }
    async getMembers() {
        const response = await axios_1.default.request({
            method: 'GET',
            url: 'https://toipptakosan11.microcms.io/api/v1/member-meta',
            headers: {
                'X-API-KEY': MICRO_CMS_API_KEY,
            },
        });
        return response.data.contents;
    }
};
MembersService = __decorate([
    (0, common_1.Injectable)()
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map