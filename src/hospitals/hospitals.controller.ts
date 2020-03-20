import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Hospitals } from './hospitals.entity';
import { HospitalsService } from './hospitals.service';

@Crud({
  model: {
    type: Hospitals,
  },
})
@Controller('hospitals')
export class HospitalsController implements CrudController<Hospitals> {
  constructor(public service: HospitalsService) {}
}
