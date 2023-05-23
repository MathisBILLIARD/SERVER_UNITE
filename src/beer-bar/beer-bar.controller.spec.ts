import { Test, TestingModule } from '@nestjs/testing';
import { BeerBarController } from './beer-bar.controller';

describe('BeerBarController', () => {
  let controller: BeerBarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeerBarController],
    }).compile();

    controller = module.get<BeerBarController>(BeerBarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
