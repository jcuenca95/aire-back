import { Test, TestingModule } from '@nestjs/testing';
import { AutonomiesService } from './autonomies.service';

describe('AutonomyService', () => {
  let service: AutonomiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutonomiesService],
    }).compile();

    service = module.get<AutonomiesService>(AutonomiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
