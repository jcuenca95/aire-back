import { Controller } from '@nestjs/common';
import { HospitalNeeds } from './hospital-needs.entity';
import { CrudController, Crud } from '@nestjsx/crud';
import { HospitalNeedsService } from './hospital-needs.service';

@Crud({
  model: {
    type: HospitalNeeds,
  },
})
@Controller('hospital-needs')
export class HospitalNeedsController implements CrudController<HospitalNeeds> {
  constructor(public service: HospitalNeedsService) {}
}
