import { Test, TestingModule } from '@nestjs/testing';
import { BreweryController } from './brewery.controller';
import { BreweryService } from './brewery.service';

describe('BreweryController', () => {
  let controller: BreweryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BreweryController],
      providers: [BreweryService],
    }).compile();

    controller = module.get<BreweryController>(BreweryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
