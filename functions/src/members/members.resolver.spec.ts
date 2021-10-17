import { Test, TestingModule } from '@nestjs/testing';
import { MembersResolver } from './members.resolver';

describe('MembersResolver', () => {
  let resolver: MembersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembersResolver],
    }).compile();

    resolver = module.get<MembersResolver>(MembersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
