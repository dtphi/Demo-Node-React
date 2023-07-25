import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewayGateway } from './api-gateway.gateway';

describe('ApiGatewayGateway', () => {
  let gateway: ApiGatewayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiGatewayGateway],
    }).compile();

    gateway = module.get<ApiGatewayGateway>(ApiGatewayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
