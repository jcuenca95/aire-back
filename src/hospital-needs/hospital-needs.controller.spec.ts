import { Test, TestingModule } from '@nestjs/testing';
import { HospitalNeedsController } from './hospital-needs.controller';

describe('HospitalNeeds Controller', () => {
  let controller: HospitalNeedsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalNeedsController],
    }).compile();

    controller = module.get<HospitalNeedsController>(HospitalNeedsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
