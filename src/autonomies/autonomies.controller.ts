import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Autonomies } from './autonomies.entity';
import { AutonomiesService } from './autonomies.service';

@Crud({
  model: {
    type: Autonomies,
  },
})
@Controller('autonomies')
export class AutonomiesController implements CrudController<Autonomies> {
  constructor(public service: AutonomiesService) {}
}
