"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_image_models_1 = require("./profile-image.models");
const sns_models_1 = require("./sns.models");
const experience_models_1 = require("./experience.models");
let Member = class Member {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    __metadata("design:type", String)
], Member.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Member.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Member.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Member.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [String]),
    __metadata("design:type", Array)
], Member.prototype, "occupation", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Member.prototype, "self_introduction", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Member.prototype, "company", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    __metadata("design:type", Number)
], Member.prototype, "experience_year", void 0);
__decorate([
    (0, graphql_1.Field)((type) => profile_image_models_1.ProfileImage),
    __metadata("design:type", profile_image_models_1.ProfileImage)
], Member.prototype, "profile_image", void 0);
__decorate([
    (0, graphql_1.Field)((type) => sns_models_1.Sns),
    __metadata("design:type", sns_models_1.Sns)
], Member.prototype, "sns", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [experience_models_1.Experience]),
    __metadata("design:type", Array)
], Member.prototype, "experience", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [String]),
    __metadata("design:type", Array)
], Member.prototype, "skills", void 0);
Member = __decorate([
    (0, graphql_1.ObjectType)()
], Member);
exports.Member = Member;
//# sourceMappingURL=member.models.js.map