import { Test, TestingModule } from '@nestjs/testing';
import { AutonomiesController } from './autonomies.controller';

describe('Autonomy Controller', () => {
  let controller: AutonomiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutonomiesController],
    }).compile();

    controller = module.get<AutonomiesController>(AutonomiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
