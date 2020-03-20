import { Test, TestingModule } from '@nestjs/testing';
import { HospitalNeedsService } from './hospital-needs.service';

describe('HospitalNeedsService', () => {
  let service: HospitalNeedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalNeedsService],
    }).compile();

    service = module.get<HospitalNeedsService>(HospitalNeedsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
