"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const members_resolver_1 = require("./members.resolver");
describe('MembersResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [members_resolver_1.MembersResolver],
        }).compile();
        resolver = module.get(members_resolver_1.MembersResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=members.resolver.spec.js.map